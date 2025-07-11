import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import loginAnimation from '../assets/Lotties/Animation - 1748663839304.json';
import { motion } from "motion/react"

const Login = () => {
    const [error, setError] = useState('');

    const location = useLocation();
    const { signInUser, forgetPassword } = use(AuthContext);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        signInUser(email, password)
            .then(() => {
                Swal.fire('User Logged In Successfully');
                // Navigate to the path stored in state from PrivateRoute, or default to home
                const destination = location.state || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error.message);
            })

        form.reset();
    }

    const handleFrogetPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            Swal.fire('Please enter your email address to reset password');
            return;
        }
        forgetPassword(email)
            .then(() => {
                Swal.fire('Password reset email sent. Please check your inbox.');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-5 md:px-0'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto pt-5 mb-10 md:p-14 md:px-10">
                <motion.h1 animate={{
                    scale: [0,1],
                    opacity: [0, 100],
                    transition: { duration: 5 }
                }} className='text-center pt-10 md:pt-0 pb-7 text-[#403F3F] font-semibold text-3xl'>Login your account</motion.h1>

                <div className='divider w-4/5 mx-auto'></div>

                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset gap-4">
                        <label className="label text-xl font-bold">Email address</label>
                        <input type="email" ref={emailRef} name='email' required className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your email address" />

                        <label className="label text-xl font-bold">Password</label>
                        <input type="password" name='password' required className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your password" />

                        <button type="button" onClick={handleFrogetPass} className="link link-hover text-accent">Forgot password?</button>


                        <p className="text-center text-red-600">{error} </p>

                        <button type='submit' className="btn btn-primary my-4">Login</button>
                    </form>

                    <p className='text-accent text-center'>Dont't Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 shrink-0'>
                <Lottie animationData={loginAnimation} loop={true} />;
            </div>
        </div>
    );
};

export default Login;