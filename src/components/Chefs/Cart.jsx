import React from 'react';

const Cart = ({ res }) => {
    const resData = res;
    console.log(resData);
    const { name, rating, recipesImage, cookingMethod, ingredients } = res;

    return (
        <div>
            <div className="card w-96 h-full glass">
                <figure><img className='w-[300px] h-[250px] mt-4 rounded' src={recipesImage} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Rating : {rating}</h2>

                    <div>
                        <div>
                            <h2 className='text-center text-sm text-black'><span className='font-semibold text-xl'>Ingredients </span> </h2>
                        </div>
                        <hr className='my-2' />
                        <ul>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-center text-sm text-black'><span className='font-semibold text-xl'>Cooking Method </span> </h2>
                    </div>
                    <hr className='my-2' />
                    <p>{cookingMethod}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;