import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
import SingleData from "./SingleData";
import { clear } from "localforage";
import Loading from "../../Loading/Loading";
import { Link, useLoaderData } from "react-router-dom";
const Card = () => {
  const { totalProducts } = useLoaderData();
  const itemsPerPage = 10;
  const iterator = [...Array(10).keys()];
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    isLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        isLoading(false);
        setProducts(data);
      });
  }, []);
  // Get stored cart from local storage.
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };
  const handleShowAll = () => {
    setShowAll(true);
  };

  // clear cart handle
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  return (
    <>
      {loading && <Loading />}
      <div className=" flex flex-col lg:flex-row lg:justify-between">
        <Link
          to={"/review"}
          className="bg-slate-600 lg:hidden top-20 sticky z-10 btn border-none bg-opacity-60 text-white backdrop-blur-sm rounded-none ml-auto">
          Cart
        </Link>

        <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 mt-12 lg:pl-10">
          {products.slice(0, showAll ? products.length : 6).map((product) => (
            <SingleData
              key={product._id}
              handleAddToCart={handleAddToCart}
              data={product}></SingleData>
          ))}
        </div>
        {!loading && (
          <Cart cart={cart} tag={"review"} clearCart={clearCart}>
            Review Order
          </Cart>
        )}
      </div>
      <div className="text-center py-14">
        {iterator.map((i) => (
          <button key={i} className="btn-warning btn-xs btn">
            {i}
          </button>
        ))}
      </div>
    </>
  );
};

export default Card;
