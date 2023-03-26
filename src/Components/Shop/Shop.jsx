import React from 'react';
import Card from './Card/Card';
import Cart from './Cart/Cart';

const Shop = () => {
    return (
        <div className='flex justify-between '>
            <Card></Card>
            <Cart></Cart>
        </div>
    );
};

export default Shop;