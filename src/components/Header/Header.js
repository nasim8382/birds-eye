import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-teal-700 h-44 pt-6 pl-12 pb-64 md:h-24 md:pb-0 md:pl-0 md:sticky top-0'>
            <div onClick={() => setOpen(!open)} className='h-8 w-8 md:hidden text-white'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`uppercase md:flex md:justify-evenly lg:justify-center md:pt-3 text-lg absolute md:static duration-500 ease-in ${open ? 'top-16' : 'top-[-220px]'}`}>
                <CustomLink to="/" className="lg:mr-12">Home</CustomLink>
                <CustomLink to="/reviews" className="lg:mr-12">Reviews</CustomLink>
                <CustomLink to="/specifications" className="lg:mr-12">Specifications</CustomLink>
                <CustomLink to="/images" className="lg:mr-12">Images</CustomLink>
                <CustomLink to="/dashboard" className="lg:mr-12">Dashboard</CustomLink>
                <CustomLink to="/blogs" className="lg:mr-12">Blogs</CustomLink>
                <CustomLink to="/about" className="lg:mr-12">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;