import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleData from "./SingleData";
const Card = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="flex justify-between">
        <div className="grid grid-cols-3 gap-5 mt-14 pl-10">
        {data.map((product) => (
        <SingleData
          key={product.id}
          handleAddToCart={handleAddToCart}
          data={product}></SingleData>
      ))}
        </div>
      <Cart length={cart.length}></Cart>
    </div>
  );
};

export default Card;
