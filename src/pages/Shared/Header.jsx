import React from 'react';
import { Link } from 'react-router-dom';
import navbar_image from '../../assets/navbar_image.png'
import ActiveLink from '../../hooks/ActiveLink/ActiveLink';

const Header = () => {
    const navItems = <>
        <li>
            <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
            <ActiveLink to='/about'>About</ActiveLink>
        </li>
        <li>
            <ActiveLink to='/blog'>Blog</ActiveLink>
        </li>
        <li>
            <ActiveLink to='/portfolio'>Portfolio</ActiveLink>
        </li>
        <li>
            <ActiveLink to='/activity'>Activity</ActiveLink>
        </li>
        <li>
            <ActiveLink to='/event'>Life Event</ActiveLink>
        </li>

    </>
    return (
        <div className="navbar bg-base-100 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='flex flex-row gap-4 items-center justify-center'>
                    <img className='w-14 h-14' src={navbar_image} alt="" />
                    <h3 className='text-3xl font-semibold'>Hosen</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to='/contact' className="py-2 px-4 bg-[#185ABC] rounded text-white font-semibold text-base">Contact</Link>
            </div>
        </div>
    );
};

export default Header;