import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const { id } = useParams();
    const allRecipes = useLoaderData();
    const singleRecipes = allRecipes.find(recipe => recipe.id === id);
    console.log(singleRecipes);
    return (
        <div>
            <h2>This is ChefRecipes</h2>
        </div>
    );
};

export default ChefRecipes;