import React from "react";

const SingleData = (props) => {
    const {category , name , price , id , seller , img} = props.data;
  return (
    <div>
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="font-semibold">Price: ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleData;
