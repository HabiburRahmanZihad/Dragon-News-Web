import React from 'react';
// import { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from '../../Provider/AuthContext';

const SocialLogin = () => {
    // const { user } = useContext(AuthContext);

    return (
        <div className='space-y-5'>
            <p className='font-bold text-xl'>Login with</p>
            <div className='flex flex-col gap-2'>


                <button
                    className='btn btn-secondary btn-outline'
                // disabled={user ? true : false}
                >
                    <FcGoogle size={24} /> Login With Google
                </button>


                <button
                    className='btn btn-primary btn-outline'
                // disabled={user ? true : false}
                >
                    <FaGithub size={24} /> Login With Github
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;