import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ res }) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { name, rating, recipesImage, cookingMethod, ingredients } = res;

    const handleToast = () => {
        toast('Successfully Favorited');
        setButtonDisabled(true);
    }

    return (
        <div>
            <div className="card w-96 h-full glass relative">
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
                    <p className='py-2'><small>{cookingMethod}</small></p>
                </div>
            </div>
            <div className="card-actions justify-end absolute m-0 mt-[-60px] ml-[10px]">
                <button onClick={handleToast} disabled={buttonDisabled} className="btn btn-primary">Favorite</button>
                <ToastContainer />
            </div>
            <hr />
        </div>
    );
};

export default Cart;