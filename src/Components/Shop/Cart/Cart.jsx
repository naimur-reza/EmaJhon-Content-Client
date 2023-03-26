import React from 'react';

const Cart = () => {
    return (
        <div className='space-y-3 bg-red-200 p-10'>
            <h1>Order Summery</h1>
            <h1>Selected Item: </h1>
            <h1>Total Shopping Charge : </h1>
            <h1>Tax: </h1>
            <h1>Grand Total : </h1>
            <button className='btn btn-error'>Clear Cart</button>
            <br />
            <button className='btn btn-warning'>Review Order</button>

        </div>
    );
};

export default Cart;