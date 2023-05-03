import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const Chefs = () => {
    const allChefs = useLoaderData();
    return (
        <div className=''>
            <div className='text-center px-2'>
                <h2 className='font-semibold text-4xl pt-4'>Chefs Blog</h2>

                <p className='mt-4 text-xl font-normal'>Different types of food can provide different <br /> nutrients that the body needs...</p>
                <hr className='w-[50%] mx-auto my-4' />
            </div>
            <div className='container w-[80%] mx-auto my-6 space-y-6 md:grid grid-cols-2 py-6'>
                {
                    allChefs.map(chef => <SingleChef
                        key={chef.id}
                        chef={chef}
                    >
                    </SingleChef>)
                }
            </div>
        </div>
    );
};

export default Chefs;