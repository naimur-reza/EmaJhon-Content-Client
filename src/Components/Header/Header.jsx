import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-slate-800 px-20 py-4 flex   justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='text-slate-200 flex gap-8  font-medium'>
                    <li className='hover:text-orange-500'><a href="/order">Order</a></li>
                    <li className='hover:text-orange-500'><a href="/review">Order Review</a></li>
                    <li className='hover:text-orange-500'><a href="/manage">Manage Inventory</a></li>
                    <li className='hover:text-orange-500'><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;