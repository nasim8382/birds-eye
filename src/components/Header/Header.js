import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header w-full bg-teal-700'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/reviews">Reviews</CustomLink>
            <CustomLink to="/specifications">Specifications</CustomLink>
            <CustomLink to="/images">Images</CustomLink>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </div>
    );
};

export default Header;