import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto pt-5 mb-10 md:p-14 md:px-10">
                <h1 className='text-center pt-10 md:pt-0  pb-7 text-[#403F3F] font-semibold text-3xl'>Login your account</h1>

                <div className='divider w-4/5 mx-auto'></div>

                <div className="card-body">

                    <fieldset className="fieldset gap-4">

                        <label className="label text-xl font-bold">Email address</label>
                        <input type="email" className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your email address" />

                        <label className="label text-xl font-bold">Password</label>
                        <input type="password" className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your password" />

                        <Link className="link link-hover text-accent">Forgot password?</Link>

                        <button className="btn btn-primary my-4">Login</button>

                    </fieldset>

                    <p className='text-accent text-center'>Dont't Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;