import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {

    const { user } = use(AuthContext);


    return (
        <div className='flex justify-between items-center '>

            <div className=''>{user && user.email } </div>

            <div className='nav flex items-center gap-5 text-accent'>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/about'> About</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/career'> Career</NavLink>
            </div>

            <div className='login-btn flex items-center gap-5'>
                <img className='w-[30px]' src={userIcon} alt="" />
                <Link to='/auth' className='btn btn-primary px-10'>Login</Link>
            </div>

        </div>
    );
};

export default Navbar;