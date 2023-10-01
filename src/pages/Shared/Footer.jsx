import React from 'react';
import navbar_image from '../../assets/navbar_image.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
        <li>
            <Link to='/activity'>Activity</Link>
        </li>
        <li>
            <Link to='/event'>Life Event</Link>
        </li>

    </>
    return (

        <div className='bg-[#2b384c]'>
            <footer className="flex flex-col md:flex-row md:justify-around md:items-center py-6 md:px-4 md:py-20 xl:p-28 bg-neutral text-center text-neutral-content  text-sm md:text-base">
                <nav>
                    <div className='flex flex-row gap-4 items-center justify-center my-4 md:my-0'>
                        <img className='w-10 h-10 md:w-14 md:h-14' src={navbar_image} alt="" />
                        <h3 className='text-xl md:text-3xl font-semibold'>Hosen</h3>
                    </div>
                </nav>
                <nav>
                    <ul className="flex gap-3 items-center justify-center lg:menu lg:menu-horizontal md:px-1">
                        {navItems}
                    </ul>
                </nav>
                <nav className='pt-4 md:pt-0'>
                    <p>Copyright © 2023</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;