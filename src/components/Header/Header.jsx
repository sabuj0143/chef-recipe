import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container w-full mx-auto mt-2 bg-gray-400 rounded p-2 flex items-center justify-around font-semibold text-xl'>
            <div className="company-name">
                <h2>Food-Network</h2>
            </div>
            <div className="nav-list">
                <Link className='mr-2' to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
            <div className=''>
                <Link to='/login'>
                    <button className='bg-gray-100 text-black py-2 px-4 rounded-md'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;