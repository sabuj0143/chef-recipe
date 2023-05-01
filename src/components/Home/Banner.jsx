import React from 'react';
import bannerImg from './../../../public/banner-image.jpg'

const Banner = () => {
    return (
        <div className='container w-full mx-auto mt-4'>
            <div className="banner-container md:flex items-center justify-around p-2">
                <div className="banner-title text-center items-center p-2">
                    <h4 className='text-center text-red-500 font-semibold text-4xl'>Welcome To Food-Network</h4>
                    <p className='mt-4 text-xl font-normal'>Different types of food can provide  different <br /> nutrients  that the body needs,<br />  such as carbohydrates,<br />proteins, fats, vitamins, and minerals.</p>
                </div>
                <div className="banner-img">
                    <img className='h-80 rounded-xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;