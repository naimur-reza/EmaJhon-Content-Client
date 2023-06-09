import React, { useContext, useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
import SingleData from "./SingleData";
import Loading from "../../Loading/Loading";
import { Link, useLoaderData } from "react-router-dom";
import { SearchContext } from "../../SearchProvider/SearchProvider";
const Card = () => {
  const { value } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { totalProducts } = useLoaderData();
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const iterator = [...Array(totalPages).keys()];
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const handlePagination = (i) => {
    setCurrentPage(i);
  };
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  useEffect(() => {
    isLoading(true);
    async function fetchData() {
      const response = await fetch(
        `https://ema-jhon-server-nine.vercel.app/products?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setProducts(data);
      isLoading(false);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);
  // Get stored cart from local storage.
  useEffect(() => {
    const fetchingData = async () => {
      const storedData = getShoppingCart();
      const ids = Object.keys(storedData);
      const response = await fetch(
        "https://ema-jhon-server-nine.vercel.app/productsByIds",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ids),
        }
      );
      // implementing search feature

      const cartProducts = await response.json();
      const storedCart = getShoppingCart();
      const savedCart = [];
      // step 1: get id of the addedProduct
      for (const id in storedCart) {
        // step 2: get product from products state by using id
        const addedProduct = cartProducts.find((product) => product._id === id);
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
    };
    fetchingData();
  }, []);
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

  // clear cart handle
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  useEffect(() => {
    isLoading(true);
    fetch(`https://ema-jhon-server-nine.vercel.app/products/${value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        isLoading(false);
      });
  }, [value]);
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
          {products.map((product) => (
            <SingleData
              key={product._id}
              handleAddToCart={handleAddToCart}
              data={product}></SingleData>
          ))}
        </div>

        <Cart cart={cart} tag={"review"} clearCart={clearCart}>
          Review Order
        </Cart>
      </div>
      <div className="text-center py-14">
        <h1 className="font-semibold py-1">Current Page : {currentPage + 1}</h1>
        {iterator.map((i) => (
          <>
            <button
              onClick={() => handlePagination(i)}
              key={i}
              className={`${
                currentPage === i ? "btn-warning btn-xs btn" : "btn-xs btn"
              } `}>
              {i + 1}
            </button>
          </>
        ))}
        <select
          onChange={handleSelectChange}
          className="p-1 ml-2 rounded-lg text-gray-400 bg-black   outline-none"
          name="pages"
          defaultValue={itemsPerPage}
          id="">
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
    </>
  );
};

export default Card;
