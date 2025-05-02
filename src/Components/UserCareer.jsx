import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Navbar from './Navbar';

const UserCareer = () => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <progress className="progress w-56"></progress>
        </div>;
    }

    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is Users profile</h1>
        </div>
    );
};

export default UserCareer;