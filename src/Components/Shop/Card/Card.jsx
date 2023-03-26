import React, { useEffect, useState } from "react";

import file from "../../../fakeData/products.json";
import SingleData from "./SingleData";
const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  

  return <div className="grid grid-cols-3 gap-5 mt-10">
    {
        data.map(product => <SingleData key={product.id} data={product}></SingleData>)
    }
  </div>;
};

export default Card;
