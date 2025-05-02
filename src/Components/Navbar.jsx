import React, { use } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleLogout = () => {
        // Handle logout logic here, e.g., call a logout function from AuthContext
        signOutUser()
            .then(() => {
                Swal.fire('User Logged Out Successfully');
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className='flex justify-between items-center '>

            <p className='hidden md:flex text-2xl font-bold text-secondary'>{user ? `hi ! ${user?.displayName}` : 'Please Login!!!'} </p>

            <div className='flex items-center gap-5 text-accent'>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/about'> About</NavLink>
                <NavLink className={({ isActive }) => isActive ? '' : ''} to='/career'> Career</NavLink>
            </div>

            <div className='login-btn flex items-center gap-5'>

                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                    <img className=' cursor-pointer'
                        src={user?.photoURL || userIcon} alt="" />
                </div>

                {user
                    ? <button onClick={handleLogout} className='btn btn-secondary px-10'>Logout</button>
                    : <Link to='/auth' className='btn btn-primary px-10'>Login</Link>}
            </div>

        </div>
    );
};

export default Navbar;