import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Components/Shop/Cart/Cart';
import SingleReviewItem from './SingleReviewItem';

const ReviewOrder = () => {
    const cart = useLoaderData();
   
    console.log(cart);
    return (
        <div className='my-container flex flex-col lg:flex-row justify-around py-10'>
            <div className="product-container">
                {
                    cart.map(it => <SingleReviewItem item={it}/>)
                }
            </div>
            
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default ReviewOrder;