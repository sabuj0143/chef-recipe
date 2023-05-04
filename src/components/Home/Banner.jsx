import React from 'react';
import { FaPhone } from 'react-icons/fa';
import bannerImg from './../../../public/banner-image.jpg'

const Banner = () => {
    return (
        <div className=' w-full h-[60vh] mt-4'>
            <div className="banner-container md:flex items-center justify-around p-2">
                <div className="banner-title text-center items-center p-2">
                    
                    <h4 className='text-center font-semibold text-4xl'><span className='text-red-500'>W</span>elcome To <span className='text-blue-800'>Food-Network</span></h4>

                    <p className='mt-4 text-xl font-normal'>Different types of food can provide  different <br /> nutrients  that the body needs,<br />  such as carbohydrates,<br />proteins, fats, vitamins, and minerals.</p>
                    <div>
                        <button className="btn btn-primary font-semibold mt-6 w-[50%]"><span className='space-x-4'>Contact us</span> <span className='ml-2'><FaPhone></FaPhone></span></button>
                    </div>
                </div>
                <div className="banner-img">
                    <img className='w-full h-[60vh] rounded-xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;