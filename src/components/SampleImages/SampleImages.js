import React, { useEffect, useState } from 'react';

const SampleImages = () => {
    const [images, setImages] = useState([]);

useEffect( () => {
    fetch('image.json')
        .then(res => res.json())
        .then(data => setImages(data));
}, [])

    return (
        <div className='my-16'>
            <h1 className='text-center mb-16 text-3xl mx-12 md:text-5xl text-orange-500'>This images are taken by <span className='text-purple-700'>DJI Mavic 2 Pro</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    images.map(image => <div key={image.id}>
                        <img src={image.img} className="w-72 h-44 md:w-80 md:h-52 lg:w-96 lg:h-60 mx-auto rounded-md" alt="drone-image" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default SampleImages;