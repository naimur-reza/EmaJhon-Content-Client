import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Cart from "../Components/Shop/Cart/Cart";
import SingleReviewItem from "./SingleReviewItem";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";
import Loading from "../Components/Loading/Loading";

const ReviewOrder = () => {
  const savedCart = useLoaderData();

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }

  const [cart, setCart] = useState(savedCart);

  const handleRemove = (id) => {
    const remaining = cart.filter((it) => it._id !== id);
    console.log(remaining);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  return (
    <div className="my-container flex flex-col lg:flex-row justify-around pt-3 p-3">
      <div className="product-container">
        {cart.map((it) => (
          <SingleReviewItem
            item={it}
            key={it._id}
            handleRemove={handleRemove}
          />
        ))}
      </div>

      <div className="cart-container ">
        {cart.length === 0 ? (
          <h1
            className="text-3xl text-warning font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            ">
            Cart Is Empty
          </h1>
        ) : (
          <Cart cart={cart} tag={"proceed"} clearCart={clearCart}>
            Proceed Checkout
          </Cart>
        )}
      </div>
    </div>
  );
};

export default ReviewOrder;
