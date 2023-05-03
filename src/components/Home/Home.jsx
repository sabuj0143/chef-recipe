import React from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import CarouselImg from './CarouselImg';

const Home = () => {
    return (
        <div className='container w-full mx-auto mt-4'>
            <hr className='my-4' />
            <Banner></Banner>
            <hr className='my-4' />
            <CarouselImg></CarouselImg>
            <hr className='my-4' />
            <Chefs></Chefs>
        </div>
    );
};

export default Home;