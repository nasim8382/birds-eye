import React, { useEffect, useState } from 'react';

const SampleImages = () => {
    const [images, setImages] = useState([]);

useEffect( () => {
    fetch('image.json')
        .then(res => res.json())
        .then(data => setImages(data));
}, [])

    return (
        <div>
            {
                images.map(image => <div key={image.id} className="images">
                    <img src={image.img} alt="drone-image" />
                </div>)
            }
        </div>
    );
};

export default SampleImages;