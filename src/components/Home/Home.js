import useCustomerReviews from '../../hooks/useCustomerReviews';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews] = useCustomerReviews();
    const navigate = useNavigate();
    const threeReviews = reviews.slice(0, 3);
    return (
        <div>
            <h2 className='text-center text-5xl py-16 text-purple-600'>Customer Reviews: ({threeReviews.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-10 mb-16'>
            {
                threeReviews.map(review => 
                    <div key={review.id}className="mx-auto border border-y-emerald-400 px-6 py-3 rounded-xl">
                        <div className='flex justify-center'>
                        <img src={review.img} className="rounded-full" alt="customer" />
                        </div>
                        <h2 className='text-center py-3 text-xl text-rose-700'>{review.name}</h2>
                        <h3 className='text-center pb-2 text-orange-400 text-lg'>Rating: {review.rating}</h3>
                        <p className='text-slate-500'>"{review.review}"</p>
                    </div>
                )
            }
            </div>
            <button onClick={() => navigate('/reviews')} className='mx-auto my-16 block border-2 py-3 px-10 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg'>See All Reviews</button>
        </div>
    );
};

export default Home;