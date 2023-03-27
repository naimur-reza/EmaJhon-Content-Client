import React from "react";

const SingleData = (props) => {
  const { ratings, name, price, id, seller, img } = props.data;
  return (
    <div>
      <div className="card w-80 h-[520px] bg-base-100 shadow-xl">
        <figure>
          <img className=""  src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Ratting: {ratings}</p>
        </div>
        <button
          onClick={() => props.handleAddToCart(props)}
          className="btn btn-accent">
          Add To Cart <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default SingleData;
