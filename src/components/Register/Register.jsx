import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [error, setError] = useState('');

    const { user, createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        // validate if elseif using to password condition.
        if(password > 6){
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
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateName(loggedUser, name, photo)
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const updateName = (user, name, profile) => {
        updateProfile(user, {
            displayName: name,
            photoURL: profile
        })
            .then(() => {
                console.log('Photo and name ');
            })
            .catch(error => {
                console.log(error.message);
            })


    };

    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    };
    const handleSignInGithub2 = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container w-full mx-auto text-center mt-8'>

            <div className='w-[50%] h-[100vh] mt-5 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div>
                    <h2 className='text-gray-700 font-bold mb-2 text-2xl'>Please Register</h2>
                    <hr className='my-2 w-[60%] mx-auto' />
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label
                            className="block text-start text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id=""
                            type="text"
                            name='name'
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-start text-gray-700 text-sm font-bold mb-2"
                            htmlFor="photo"
                        >
                            Photo URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id=""
                            type="text"
                            name='photo'
                            placeholder="Enter your  Photo URL"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-start text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id=""
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
                            id=""
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
                        <input className='btn-submit w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            type="submit"
                            value="Register" />
                    </div>
                    <div className='mt-2'>
                        <p><small>Already have an account? <Link to="/login"><span className='text-red-500'>Login</span></Link></small></p>
                    </div>
                </form>
                <div className='w-full mt-5 space-y-2'>
                    <div className='mx-16'>
                        <button onClick={handleSignInGithub2} className='btn btn-secondary w-full'><FaGithub /><span className='ml-2'>Github</span></button>
                    </div>
                    <div className='mx-16'>
                        <button onClick={handleSignInGoogle} className='btn btn-secondary w-full'><FaGoogle /> <span className='ml-2'>Google</span></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;