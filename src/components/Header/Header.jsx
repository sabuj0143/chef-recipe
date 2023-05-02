import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='container w-full mx-auto mt-2 bg-base-200 rounded p-2 flex items-center justify-around font-semibold text-xl'>
            <div className="company-name">
                <h2>Food-Network</h2>
            </div>
            <div className="nav-list space-x-2">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <div className=''>
                {
                    user ?
                        <>
                         <span>{user?.email}</span>
                         <button onClick={handleLogOut} className='bg-gray-400 text-black mr-4 py-2 px-4 rounded-md'>Sign Out</button>

                        </> : <Link to='/login'><button className='bg-gray-400 text-black py-2 px-4 rounded-md'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;