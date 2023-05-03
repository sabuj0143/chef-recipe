import React from 'react';
import Banner from './Banner';
import Chefs from '../Chefs/Chefs';
import CarouselImg from './CarouselImg';
import PageViews from './PageViews';

const Home = () => {
    return (
        <div className='container w-full mx-auto mt-4'>
            <hr className='my-4' />
            <Banner></Banner>
            <hr className='my-4' />
            <CarouselImg></CarouselImg>
            <hr className='my-4' />
            <Chefs></Chefs>
            <hr className='my-4' />
            <PageViews></PageViews>
        </div>
    );
};

export default Home;