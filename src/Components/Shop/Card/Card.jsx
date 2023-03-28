import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import Cart from "../Cart/Cart";
import SingleData from "./SingleData";
const Card = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // Get stored cart from local storage.
  useEffect(() => {
    let savedCart = [];
    const storedCart = getShoppingCart();
    // Get single Id from cart.
    for (const id in storedCart) {
      // Get saved product from stored cart using find in loop..
      const savedProduct = products.find(product => product.id === id);
      // Get quantity from the product.
      const quantity = storedCart[id];
      if(savedProduct){
        savedProduct.quantity = quantity;
        // Push the product to the saved cart new array.
        savedCart.push(savedProduct);
      }
    }
    // Set the cart
    setCart(savedCart)
  }, [products]);
  // useEffect(()=> {
  //   const storedCart = getShoppingCart();
  //   for(const id in storedCart){
  //     const addedProduct = data.find(product => id ===product.id);
  //     const quantity = storedCart[id];
  //     addedProduct.quantity = quantity;

  //   }
  // },[data])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product.data];
    setCart(newCart);
    addToDb(product.data.id);
  };
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="grid justify-items-center gird-cols-1 lg:grid-cols-3 gap-5 mt-14 lg:pl-10">
          {products.slice(0, showAll ? products.length : 6).map((product) => (
            <SingleData
              key={product.id}
              handleAddToCart={handleAddToCart}
              data={product}></SingleData>
          ))}
        </div>
        <Cart cart={cart}></Cart>
      </div>
      <div className="text-center py-14">
        <button onClick={handleShowAll} className="btn  btn-success">
          View More
        </button>
      </div>
    </>
  );
};

export default Card;
