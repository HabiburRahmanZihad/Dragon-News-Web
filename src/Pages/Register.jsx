import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import { motion } from "motion/react"

const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUserProfile, user, setUser } = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        setError('');

        if (name.length < 3) {
            setError('Name must be at least 3 characters long');
            return;
        }
        if (photoURL.length < 5) {
            setError('Photo URL must be a valid URL');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!terms) {
            setError('Please accept the terms and conditions');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL });
                    })
                    .catch(error => {
                        setError(error.message);
                    });
                // User created successfully
                Swal.fire('User Created Successfully');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto pt-5 mb-10 md:pt-14 md:px-10">

                <motion.h1
                    animate={{
                        color: ['#ff5733', '#33ff33', '#8a33ff'],
                        // scale: [0, 1],
                        scale: [1],
                        // scale: [0.8, 1.2, 0.8],
                        opacity: [0, 1],
                        transition: { duration: 2, repeat: Infinity }
                        // transition: { duration: 2, repeat: Infinity , repeatType: 'reverse' }
                    }}
                    className='text-center pt-10 md:pt-0  pb-7 text-[#403F3F] font-semibold text-3xl'>Register your account</motion.h1>

                <div className='divider w-4/5 mx-auto'></div>

                <div className="card-body">

                    <form onSubmit={handleRegister} className="fieldset gap-4">

                        <label className="label text-xl font-bold">Your Name</label>
                        <input type="text" name='name' className="input w-full bg-base-200 py-8 border-0 text-accent" required placeholder="Enter your name" />

                        <label className="label text-xl font-bold">Photo URL</label>
                        <input type="text" name='photoURL' className="input w-full bg-base-200 py-8 border-0 text-accent" required placeholder="Enter your Photo Link" />

                        <label className="label text-xl font-bold">Email address</label>
                        <input type="email" name='email' className="input w-full bg-base-200 py-8 border-0 text-accent" required placeholder="Enter your email address" />

                        <label className="label text-xl font-bold">Password</label>
                        <input type="password" name='password' className="input w-full bg-base-200 py-8 border-0 text-accent" required placeholder="Enter your password" />

                        <div className="text-accent flex items-center  gap-4">
                            <input type="checkbox" defaultChecked name='terms' className="checkbox" />Accept
                            <span className='font-bold'>Term & Conditions</span>
                        </div>

                        <button type='submit' className="btn btn-primary my-4">Register</button>

                        <p className="text-center text-red-600">{error} </p>

                    </form>

                    <p className='text-accent text-center'>Already, Have An Account ! <Link to='/auth' className='text-secondary'>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Register;