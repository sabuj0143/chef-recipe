import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const { id } = useParams();
    const allRecipes = useLoaderData();
    const singleRecipes = allRecipes.find(recipe => recipe.id === id);
    console.log(singleRecipes);
    const { name, image, bio, numRecipes, yearsExperience, likes } = singleRecipes;

    return (
        <>
            <div className="card w-[40%] mx-auto my-6 bg-base-100 shadow-xl">
                <figure><img className='w-[450px] h-[400px]' src={image} alt="Shoes" /></figure>
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

                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};

export default ChefRecipes;