import React from "react";

const SingleData = (props) => {
  const { ratings, name, price, id, seller, img } = props.data;
  return (
    <div className="card  lg:w-56 w-[173px]  lg:h-[440px] bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title text-sm lg:text-lg">{name}</h2>
        <p className="font-semibold text-xs">
          Price: $<span className="text-yellow-600">{price}</span>
        </p>
        <p className="text-xs lg:text-base">Manufacturer: {seller}</p>
        <p className="text-xs lg:text-base">Ratting: {ratings}</p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.data)}
        className="btn btn-accent"
      >
        Add To Cart <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default SingleData;
