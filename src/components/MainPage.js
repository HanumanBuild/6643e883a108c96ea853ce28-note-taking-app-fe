import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='container mx-auto text-center p-4'>
            <h1 className='text-4xl font-bold mb-4'>Welcome to the Note-Taking App</h1>
            <Link to='/login' className='text-blue-500 hover:text-blue-700'>Login</Link> |
            <Link to='/register' className='text-blue-500 hover:text-blue-700'>Register</Link>
        </div>
    );
};

export default MainPage;