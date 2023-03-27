import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleData from "./SingleData";
const Card = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAll, setShowAll] = useState(false);
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
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="grid justify-items-center gird-cols-1 lg:grid-cols-3 gap-5 mt-14 lg:pl-10">
          {data.slice(0, showAll ? data.length : 6).map((product) => (
            <SingleData
              key={product.id}
              handleAddToCart={handleAddToCart}
              data={product}></SingleData>
          ))}
        </div>
        <Cart  cart={cart}></Cart>
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
