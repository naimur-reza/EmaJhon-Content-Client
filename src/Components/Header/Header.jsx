import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-slate-800 top-0 sticky z-30 px-20 py-2 flex lg:flex-row flex-col   justify-between items-center'>
<div className="navbar text-white font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content bg-slate-800 mt-3 p-2  rounded-box w-52">
        <li><a>Order</a></li>
        <li><a>Order Review</a></li>
        <li><a>Manage Inventory</a></li>
        <li><a>Login</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Order</a></li>
        <li><a>Order Review</a></li>
        <li><a>Manage Inventory</a></li>
        <li><a>Login</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;