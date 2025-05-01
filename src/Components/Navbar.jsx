import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>

            <div className=''></div>

            <div className='nav flex items-center gap-5 text-accent'>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/about'> About</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/career'> Career</NavLink>
            </div>

            <div className='login-btn flex items-center gap-5'>
                <img className='w-[30px]' src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>

        </div>
    );
};

export default Navbar;