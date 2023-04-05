import React, { useState } from "react";
import { useLoaderData , useNavigation} from "react-router-dom";
import Cart from "../Components/Shop/Cart/Cart";
import SingleReviewItem from "./SingleReviewItem";
import { removeFromDb } from "../utilities/fakedb";
import Loading from "../Components/Loading/Loading";

const ReviewOrder = () => {
  const savedCart = useLoaderData();

  

    const navigation = useNavigation();
    if (navigation.state === "loading"){
        return <Loading/>
    }

  const [cart, setCart] = useState(savedCart);


  const handleRemove = (id) => {
    const remaining = cart.filter((it) => it.id !== id);
    console.log(remaining);
    setCart(remaining);
    removeFromDb(id)
  };
  return (
    <div className="my-container flex flex-col lg:flex-row justify-around pt-3">
      <div className="product-container">
        {cart.map((it) => (
          <SingleReviewItem item={it} key={it.id} handleRemove={handleRemove} />
        ))}
      </div>

      <div className="cart-container ">
        <Cart cart={cart}>Proceed Checkout</Cart>
      </div>
    </div>
  );
};

export default ReviewOrder;
