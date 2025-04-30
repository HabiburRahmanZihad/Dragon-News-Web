import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 my-10'>

            <img src={logo} alt="" />

            <h1 className='text-xl text-accent'>Journalism Without Fear or Favour</h1>

            <p className='text-accent'>{format(new Date(), "eeee, MMMM d, yyyy")}</p>

        </div>
    );
};

export default Header;