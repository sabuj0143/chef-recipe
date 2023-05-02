import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const Chefs = () => {
    const allChefs = useLoaderData();
    console.log(allChefs);
    return (
        <div className='container w-[80%] mx-auto space-y-6 md:grid grid-cols-2'>
            {
                allChefs.map(chef => <SingleChef
                    key={chef.id}
                    chef={chef}
                >
                </SingleChef>)
            }
        </div>
    );
};

export default Chefs;