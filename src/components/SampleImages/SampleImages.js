import React, { useEffect, useState } from 'react';

const SampleImages = () => {
    const [images, setImages] = useState([]);

useEffect( () => {
    fetch('image.json')
        .then(res => res.json())
        .then(data => setImages(data));
}, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
            {
                images.map(image => <div key={image.id}>
                    <img src={image.img} className="w-72 h-44 md:w-80 md:h-52 lg:w-96 lg:h-60 mx-auto rounded-md" alt="drone-image" />
                </div>)
            }
        </div>
    );
};

export default SampleImages;