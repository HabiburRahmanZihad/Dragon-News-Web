import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const { signInUser } = use(AuthContext);


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                alert(error.message);
            })

    }


    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto pt-5 mb-10 md:p-14 md:px-10">
                <h1 className='text-center pt-10 md:pt-0  pb-7 text-[#403F3F] font-semibold text-3xl'>Login your account</h1>

                <div className='divider w-4/5 mx-auto'></div>

                <div className="card-body">

                    <form onSubmit={handleSignIn} className="fieldset gap-4">

                        <label className="label text-xl font-bold">Email address</label>
                        <input type="email" name='email' className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your email address" />

                        <label className="label text-xl font-bold">Password</label>
                        <input type="password" name='password' className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your password" />

                        <Link className="link link-hover text-accent">Forgot password?</Link>

                        <button type='submit' className="btn btn-primary my-4">Login</button>

                    </form>

                    <p className='text-accent text-center'>Dont't Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;