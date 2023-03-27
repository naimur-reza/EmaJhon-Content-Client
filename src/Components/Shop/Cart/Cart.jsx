import React from "react";

const Cart = (props) => {
  return (
    <div className="space-y-3 bg-pink-200  p-10 font-semibold lg:ml-5 h-fit">
      <h1 className="text-lg font-bold">Order Summery</h1>
      <h1>Selected Item: {props.length}</h1>
      <h1>Total Shopping Charge : </h1>
      <h1>Tax: </h1>
      <h1>Grand Total : </h1>
      <button className="btn btn-error">Clear Cart</button>
      <br />
      <button className="btn btn-warning">Review Order</button>
    </div>
  );
};

export default Cart;
