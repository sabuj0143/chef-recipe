import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const Chefs = () => {
    const allChefs = useLoaderData();
    return (
        <>
            <div className='text-center text-red-400'>
                <h2 className='font-semibold text-4xl'>Our Chefs</h2>
            </div>
            <div className='container w-[80%] mx-auto my-6 space-y-6 md:grid grid-cols-2'>
                {
                    allChefs.map(chef => <SingleChef
                        key={chef.id}
                        chef={chef}
                    >
                    </SingleChef>)
                }
            </div>
        </>
    );
};

export default Chefs;