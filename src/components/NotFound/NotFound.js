import React from 'react';
import error from '../../images/error.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img src={error} className="mx-auto" alt="error-image" />
            <button onClick={() => navigate('/home')} className='mx-auto block border-2 py-3 px-8 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition'>Go Back To Home</button>
        </div>
    );
};

export default NotFound;