import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-full mx-auto text-center items-center rounded p-6  md:flex justify-around font-semibold text-xl'>
            <div className="company-name">
                <h2>Food-Network</h2>
            </div>
            <div className="nav-list space-x-2">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <div>
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div className="tooltip" data-tip={user?.displayName}>
                                <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className='bg-gray-400 text-black py-2 px-4 rounded-md'>Sign Out</button>

                        </div> : <Link to='/login'><button className='bg-gray-400 text-black py-2 px-4 rounded-md'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;