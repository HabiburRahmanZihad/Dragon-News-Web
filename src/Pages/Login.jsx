import React, { use, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const { signInUser, forgetPassword } = use(AuthContext);
    const emailRef = useRef(null);

    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                alert('User Logged In Successfully');
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
            })

        form.reset();
    }

    const handleFrogetPass = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please enter your email address to reset password');
            return;
        }
        forgetPassword(email)
            .then(() => {
                alert('Password reset email sent. Please check your inbox.');
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
                        <input type="email" ref={emailRef} name='email' className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your email address" />

                        <label className="label text-xl font-bold">Password</label>
                        <input type="password" name='password' className="input w-full bg-base-200 py-8 border-0 text-accent" placeholder="Enter your password" />

                        <button onClick={handleFrogetPass} className="link link-hover text-accent">Forgot password?</button>

                        <button type='submit' className="btn btn-primary my-4">Login</button>

                    </form>

                    <p className='text-accent text-center'>Dont't Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;