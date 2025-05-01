import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>

            <header className='w-11/12 mx-auto py-10 '>
                <Navbar></Navbar>
            </header>


            <main className='pb-10 px-2 md:px-0'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;