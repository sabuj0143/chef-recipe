import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { SyncLoader } from 'react-spinners';

const Main = () => {
    const { loading } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <div className='container w-full mx-auto'>
            <Header></Header>
            <div className='w-[100%] text-center items-center justify-center'>
                {navigation.state === 'loading' && <><SyncLoader color="#36d7b7" /></>}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;