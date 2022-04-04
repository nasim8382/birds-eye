import useCustomerReviews from '../../hooks/useCustomerReviews';
import { useNavigate } from 'react-router-dom';
import drone from '../../images/bg.jpeg';
import girl from '../../images/dji.jpg';

const Home = () => {
    const [reviews] = useCustomerReviews();
    const navigate = useNavigate();
    const threeReviews = reviews.slice(0, 3);
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-12 bg-no-repeat bg-cover' style={{backgroundImage: `url(${drone})`}}>
                <div className='mx-auto md:pl-12 lg:pl-24 md:pt-24 text-white'>
                    <h2 className='text-6xl'>Capture your Moments!!!</h2>
                    <h3 className='text-5xl my-8'>With DJI Mavic 2 Pro</h3>
                    <p className='text-xl'>DJI Mavic 2 Pro Drone Quadcopter Camera, A drone that embodies all of DJI’s advanced, signature technologies, and is able to redefine what is possible for the world of aerial photography. In creating the Mavic 2, they have made this dream come true.</p>
                    <div className='flex '>
                        <button onClick={() => navigate('/images')} className='my-16 block border-2 py-3 px-10 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg mr-12 bg-slate-600'>Sample Images</button>
                        <button onClick={() => navigate('/specifications')} className='my-16 bg-slate-600 block border-2 py-3 px-10 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg'>Full Specifications</button>
                    </div>
                </div>
                <div className='mx-auto py-12'>
                    <img style={{height: "600px"}} className='rounded-lg shadow-2xl shadow-neutral-500' src={girl} />
                </div>
            </div>

            <h2 className='text-center text-4xl py-16 text-purple-600'>Customer Reviews: ({threeReviews.length})</h2>
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