import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Typewriter from "typewriter-effect";

const Login = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleLoginUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        // validate if elseif using to password condition.
        if (!password === password) {
            setError('Enter your the correct Password')
        }
        else if (password > 6) {
            setError('Places Enter most be 6 character')
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Places Enter One Uppercase.');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Assert a string has at least One Special Character');
            return;
        }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.massage)
            })
    };
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
            })
            .catch(error => {
                setError(error.massage);
            })
    }
    const handleSignInGithub = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(error => {
                setError(error);
            })
    }
    return (
        <div className='container w-full mx-auto text-center mt-8'>

            <div className='w-[50%] h-[80vh] mt-5 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12'>
                <div>
                    <h2 className='text-gray-700 font-bold mb-2 text-2xl'>
                        <Typewriter
                            options={{
                                strings: ["Please Login"],
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                cursor: "_",
                                deleteSpeed: 20,
                            }}
                        />
                    </h2>
                    <hr className='my-2 w-[60%] mx-auto' />
                </div>
                <form onSubmit={handleLoginUser}>
                    <div className="mb-4">
                        <label
                            className="block text-start text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-start text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name='password'
                            placeholder="********"
                            required
                        />
                    </div>
                    <div className='mb-2'>
                        <p className='text-red-500'>{error}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <input className='btn-submit w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="Login" />
                    </div>
                    <div className='mt-2'>
                        <p><small>Don't Have An Account? <Link to="/register"><span className='text-red-500'>Register</span></Link></small></p>
                    </div>
                </form>
                <div className='w-full mt-5 space-y-2'>
                    <div className='mx-16'>
                        <button onClick={handleSignInGoogle} className='btn btn-secondary w-full'><FaGithub /><span className='ml-2'>Google</span></button>
                    </div>
                    <div className='mx-16'>
                        <button onClick={handleSignInGithub} className='btn btn-secondary w-full'><FaGoogle /> <span className='ml-2'></span>Github</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;