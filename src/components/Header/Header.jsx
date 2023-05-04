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
        <div className='w-full mx-auto text-center items-center rounded p-6  md:flex justify-around font-semibold text-xl'>
            <div className="company-name">
                <h2>Food-<span className='text-red-600'>Network</span></h2>
            </div>
            <div className="nav-list space-x-2">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </div>
            <div>
                {
                    user ?
                        <div className='items-center gap-3 md:flex '>
                            <div className="tooltip" data-tip={user?.displayName}>
                                <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogOut} className='btn btn-primary text-black py-2 px-4 rounded-md'>Sign Out</button>

                        </div> : <Link to='/login'><button className='btn btn-primary text-black py-2 px-4 rounded-md'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;