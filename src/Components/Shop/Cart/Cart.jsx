import React from "react";
import { deleteShoppingCart } from "../../../utilities/fakedb";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, children, tag }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  // clear cart
  return (
    <div className="space-y-3 top-20 sticky bg-opacity-50 w-80 bg-pink-200  p-10  lg:ml-5 h-fit">
      <h1 className=" font-bold text-ghost text-center text-xl">
        Order Summery
      </h1>
      <h1 className="bg-slate-100 p-2 rounded-lg">
        Selected Item: <span>{quantity}</span>
      </h1>
      <h1 className="bg-slate-100 p-2 rounded-lg">
        Item Price :{" "}
        <span className="text-warning font-semibold tracking-wide">
          ${totalPrice}
        </span>{" "}
      </h1>
      <h1 className="bg-slate-100 p-2 rounded-lg">
        Shipping Cost:{" "}
        <span className="text-warning font-semibold tracking-wide">
          ${totalShipping}
        </span>{" "}
      </h1>
      <h1 className="bg-slate-100 p-2 rounded-lg">
        Tax:{" "}
        <span className="text-warning font-semibold tracking-wide">${tax}</span>{" "}
      </h1>
      <h1 className="bg-slate-100 p-2 rounded-lg text-xl">
        Total :{" "}
        <span className="text-blue-500  tracking-wider font-[500]">
          ${grandTotal}
        </span>
      </h1>
      <button onClick={() => clearCart()} className="btn btn-error">
        Clear Cart
      </button>
      <br />
      <Link to={`/${tag}`} className="btn btn-warning">
        {children}
      </Link>
    </div>
  );
};

export default Cart;
