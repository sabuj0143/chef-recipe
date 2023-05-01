import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    return (
        <div className='container w-full mx-auto text-center mt-4'>
            <h2 className='text-gray-700 font-bold mb-2 text-2xl'>Login</h2>
            <div className='w-[50%] h-[60vh] mt-5 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className='w-full mt-5 space-y-2'>
                    <div>
                        <button className='btn btn-secondary w-full'><FaGithub /><span className='ml-2'>Github</span></button>
                    </div>
                    <div>
                        <button className='btn btn-secondary w-full'><FaGoogle /> <span className='ml-2'>Google</span></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;