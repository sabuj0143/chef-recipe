import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='container w-full mx-auto'>
            <Header></Header>
            <div>
                {navigation.state === 'loading' && 'Loading...'}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;