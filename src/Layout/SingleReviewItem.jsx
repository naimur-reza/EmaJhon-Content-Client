import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const SingleReviewItem = ({item ,handleRemove}) => {
    const {price,id , name , shipping ,img ,quantity} = item;
    return (
        <div className='flex p-3  border-slate-400 rounded-md gap-2 border   mb-4 items-center'>
        <img className='lg:w-24 w-16 rounded-md' src={img} alt="item-image" />
        <div className='space-y-1 w-28 lg:w-auto'>
            <p className='text-md w-64  font-semibold'>{name}</p>
            <p className='text-md font-semibold text-slate-700'>Price: <span className='text-warning'>${price}</span></p>
            <p className='text-sm font-semibold text-slate-700'>Shipping: <span className='text-warning'>${shipping}</span></p>
            <p className='text-sm font-semibold text-slate-700'>Quantity: x{quantity}</p>
        </div>
        <div onClick={()=> handleRemove(id)} className='ml-auto bg-red-500 bg-opacity-30 rounded-full p-3'>
        <TrashIcon className='text-red-500 w-7'/>
        </div>
    </div>
    );
};

export default SingleReviewItem;