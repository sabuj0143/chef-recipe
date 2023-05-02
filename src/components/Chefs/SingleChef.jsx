import React from 'react';

const SingleChef = ({ chef }) => {
    const { id, name, image, numRecipes, yearsExperience, likes } = chef;
    return (
        <div className='container w-full md:flex justify-center items-center space-x-3'>
            <div className="card w-[96] bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div>
                        <div>Recipes : {numRecipes}</div>
                    </div>
                    <div className="card-actions justify-start">
                        <button >View Chefs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;