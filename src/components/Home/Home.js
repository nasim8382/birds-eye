import useCustomerReviews from '../../hooks/useCustomerReviews';
import { useNavigate } from 'react-router-dom';
import drone from '../../images/bg.jpeg';
import lense from '../../images/dji.jpg';
import girl from '../../images/girl.jpeg';

const Home = () => {
    const [reviews] = useCustomerReviews();
    const navigate = useNavigate();
    const threeReviews = reviews.slice(0, 3);
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-12 bg-no-repeat bg-cover' style={{backgroundImage: `url(${drone})`}}>
                <div className='mx-4 md:mx-auto pt-16 md:px-12 lg:pl-24 md:pt-24 text-white'>
                    <h2 className='text-6xl'>Capture your Moments!!!</h2>
                    <h3 className='text-5xl my-8'>With DJI Mavic 2 Pro</h3>
                    <p className='text-xl'>DJI Mavic 2 Pro Drone Quadcopter Camera, A drone that embodies all of DJI’s advanced, signature technologies, and is able to redefine what is possible for the world of aerial photography. In creating the Mavic 2, they have made this dream come true.</p>
                    <div className='flex '>
                        <button onClick={() => navigate('/images')} className='my-16 block border-2 py-3 px-10 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg mr-12 bg-slate-600'>Sample Images</button>
                        <button onClick={() => navigate('/specifications')} className='my-16 bg-slate-600 block border-2 py-3 px-8 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg'>Full Specifications</button>
                    </div>
                </div>
                <div className='mx-auto pb-20 md:pb-16 lg:py-12 relative'>
                    <button className='absolute left-20 bottom-4 md:bottom-28 md:left-52 border-2 px-10 py-3 text-white uppercase font-semibold border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition'>
                        <a href="https://www.youtube.com/watch?v=7SembcsxrQw" target="_blank" rel="noopener noreferrer">Demo Video</a>
                    </button>
                    <img className='md:hidden mx-auto h-full w-11/12 rounded-lg shadow-2xl shadow-neutral-500' src={girl} />
                    <img style={{height: "600px"}} className='hidden md:inline-flex rounded-lg shadow-2xl shadow-neutral-500' src={lense} />
                </div>
            </div>

            <h2 className='text-center text-3xl md:text-5xl py-16 text-purple-600'>Customer Reviews: ({threeReviews.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-10 mb-16'>
            {
                threeReviews.map(review => 
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
            <button onClick={() => navigate('/reviews')} className='mx-auto my-16 block border-2 py-3 px-10 border-y-amber-500 hover:border-x-amber-500 hover:border-y-slate-200 transition rounded-lg'>See All Reviews</button>
        </div>
    );
};

export default Home;