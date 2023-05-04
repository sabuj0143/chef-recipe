import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from '../Chefs/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const { id } = useParams();
    const allRecipes = useLoaderData();
    const singleRecipes = allRecipes.find(recipe => recipe.id === id);
    const { name, image, bio, numRecipes, yearsExperience, likes } = singleRecipes;

    const handleToast = () => {
        toast('Successfully Favorited');
        setButtonDisabled(true);
    }

    return (
        <>
            <div className="card w-[40%] h-[90vh] mx-auto my-6 bg-base-100 shadow-xl">
                <figure><img className='w-full h-[40vh]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <hr />
                    <h2 className="card-title">
                        <span className='font-semibold text-2xl'>{name}</span>
                    </h2>
                    <hr />
                    <p className='text-sm'> <span className='font-semibold text-xl'>Description : </span>  {bio}</p>
                    <p className='text-sm'> <span className='font-semibold text-xl'>Number Of Recipes : </span>  {numRecipes}</p>
                    <p className='text-sm'> <span className='font-semibold text-xl'>Years Of Experience : </span>  {yearsExperience}</p>
                    <p className='text-sm'> <span className='font-semibold text-xl'> Likes : </span> {likes}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleToast} disabled={buttonDisabled} className="btn btn-primary">Favorite</button>
                        <ToastContainer />
                    </div>
                    <hr />
                </div>
            </div>
            <div className='md:grid grid-cols-3 my-4'>
                {
                    singleRecipes.recipes.map(res => <Cart key={res} res={res}></Cart>)
                }
            </div>
        </>
    );
};

export default ChefRecipes;