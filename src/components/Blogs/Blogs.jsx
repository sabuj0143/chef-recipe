import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-full mx-auto mt-4 p-4'>
            <hr className='my-6' />
            <div>
                <h4 className='text-xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components?</h4>
                <p className='mt-2'>Ans : <small>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props  passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</small></p>
            </div>
            <div className='mt-4'>
                <h4 className='text-xl font-semibold'>2. How to validate React props using PropTypes?</h4>
                <p className='mt-2'>Ans : <small>PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we're using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
                </small></p>
            </div>
            <div className='mt-4'>
                <h4 className='text-xl font-semibold'>3. Tell us the difference between nodejs and express js?</h4>
                <p className='mt-2'>Ans : <small>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.js web application framework that provides a robust set of features for web and mobile applications </small></p>
            </div>
        </div>
    );
};

export default Blogs;