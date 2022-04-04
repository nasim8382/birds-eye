import React from 'react';
import useCustomerReviews from '../../hooks/useCustomerReviews';

const Reviews = () => {
    const [reviews] = useCustomerReviews();
    return (
        <div>
            <h2 className='text-center text-5xl py-16 text-purple-600'>Customer Reviews: ({reviews.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-10 mb-16'>
            {
                reviews.map(review => 
                    <div key={review.id}className="mx-auto border border-y-emerald-400 px-6 py-3 rounded-xl">
                        <div className='flex justify-center'>
                        <img src={review.img} className="rounded-full" alt="customer" />
                        </div>
                        <h2 className='text-center py-3 text-xl text-rose-700'>{review.name}</h2>
                        <h3 className='text-center pb-2 text-orange-600 text-lg'>Rating: {review.rating}</h3>
                        <p className='text-slate-500'>"{review.review}"</p>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Reviews;