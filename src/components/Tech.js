import React, { useState } from 'react';

const images = [
    'https://keen-treacle-c62518.netlify.app/img/html-5.png',
    'https://keen-treacle-c62518.netlify.app/img/css-3.png',
    'https://keen-treacle-c62518.netlify.app/img/js.png',
    'https://keen-treacle-c62518.netlify.app/img/tw.png',
    'https://keen-treacle-c62518.netlify.app/img/react.png',
    'https://keen-treacle-c62518.netlify.app/img/strapi.png',
    'https://keen-treacle-c62518.netlify.app/img/wordpress.png',
    'https://keen-treacle-c62518.netlify.app/img/github.png'
];

const Tech = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        if (activeIndex < images.length - 5) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevImage = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const visibleImages = images.slice(activeIndex, activeIndex + 5);

    return (

        <div className="relative overflow-hidden md:mr-20 mr-10 md:ml-20 ml-10 rounded-md mt-20">
            <div
                className="flex items-center justify-center transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * (100 / 5)}%)` }}>
                {visibleImages.map((image, index) => (
                    <div key={index} className="w-2/3 flex justify-center"> {/* Centering the image */}
                        <img src={image} alt={`Image ${index + 1}`} className="w-20" />
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-indigo-800 text-white rounded-l" onClick={prevImage} disabled={activeIndex === 0}>
                prev
                {/* Left arrow icon */}
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-indigo-800 text-white rounded-r" onClick={nextImage} disabled={activeIndex === images.length - 5}>
                next
                {/* Right arrow icon */}
            </button>
        </div>
    );
};

export default Tech;
