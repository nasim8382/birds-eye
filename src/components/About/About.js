import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faGears, faGlasses } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-5xl text-center my-8 text-orange-500'>Who We are?</h1>
            <p className='text-justify mx-6 my-8'>Bird'sEye.com.bd is a fast growing online shopping destination in Bangladesh with principal office in Gangni, Meherpur-1210. Our mission at Bird's Eye has always been to surprise and delight you with the service you’ve come to expect from one of the best online retailers in the country. We source all of our products with care, ensuring that anything you find at Bird's Eye is unique, authentic, just the way you want them to be. At Bird's Eye, we all work every day to solve the biggest problems in online shopping experience. We act with integrity and build on reliability, quality and passion as the foundation of our service. Thank You, for visiting us.</p>
            <h2 className='text-5xl text-center my-16 text-orange-500'>What We offer?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-stone-300 text-center py-6 w-72 mx-auto'>
                    <FontAwesomeIcon icon={faCartPlus}className="w-44 h-44 text-slate-700"></FontAwesomeIcon>
                    <p className='text-3xl'>Online Shopping</p>
                </div>
                <div className='bg-stone-300 text-center py-6 w-72 mx-auto'>
                    <FontAwesomeIcon icon={faGears}className="w-44 h-44 text-slate-700"></FontAwesomeIcon>
                    <p className='text-3xl'>Customizable Products</p>
                </div>
                <div className='bg-stone-300 text-center py-6 w-72 mx-auto'>
                    <FontAwesomeIcon icon={faGlasses}className="w-44 h-44 text-slate-700"></FontAwesomeIcon>
                    <p className='text-3xl'>Digital Marketing</p>
                </div>
            </div>
            <button onClick={() => navigate('/home')} className='mx-auto my-16 block border-2 py-3 px-8 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition'>Back To Buy DRONE</button>
        </div>
    );
};

export default About;