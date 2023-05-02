import React from 'react';
import { Link } from 'react-router-dom';

const SingleChef = ({ chef }) => {
    const { id, name, image, numRecipes, yearsExperience, likes } = chef;
    return (
        <div className='container w-full md:flex justify-center items-center space-x-3'>
            <div className="card w-[96] bg-base-100 shadow-xl">
                <figure><img className='w-[400px] h-[300px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-2xl">
                        {name}
                    </h2>
                    <div>
                        <div className='font-semibold text-xl'>Experience : {yearsExperience}</div>
                    </div>
                    <div>
                        <div className='font-semibold text-xl'>Recipes : {numRecipes}</div>
                    </div>
                    <div>
                        <div className='font-semibold text-xl'>Likes : {likes}</div>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-primary font-semibold mt-2">View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;