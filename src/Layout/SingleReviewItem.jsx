import React from 'react';

const SingleReviewItem = ({item}) => {
    const {price , title , shipping ,img} = item;
    return (
        <div className='flex gap-2 border border-violet-500 my-3 items-center'>
        <img className='w-24 rounded-md' src={img} alt="item-image" />
        <div>
            <p>{title}</p>
            <p>Price:${price}</p>
            <p>Shipping: ${shipping}</p>
        </div>
    </div>
    );
};

export default SingleReviewItem;