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
  useEffect( () =>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for(const id in storedCart){
        // step 2: get product from products state by using id
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
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
}, [products])
const handleAddToCart = (product) => {
  // cart.push(product); '
  let newCart = [];
  // const newCart = [...cart, product];
  // if product doesn't exist in the cart, then set quantity = 1
  // if exist update quantity by 1
  const exists = cart.find(pd => pd.id === product.id);
  if(!exists){
      product.quantity = 1;
      newCart= [...cart, product]
  }
  else{
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists];
  }

  setCart(newCart);
  addToDb(product.id)
}
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
        {!showAll && (
          <button onClick={handleShowAll} className="btn  btn-success">
            View More
          </button>
        )}
      </div>
    </>
  );
};

export  default Card;
