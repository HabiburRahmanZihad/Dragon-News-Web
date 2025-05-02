import React, { useContext, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthContext';
import { useNavigate, useLocation } from 'react-router';

const SocialLogin = () => {
    const { loginGoogle, loginGithub, user } = useContext(AuthContext);
    const [loading, setLoading] = useState({ google: false, github: false });

    const navigate = useNavigate();
    const location = useLocation();
    
    // Get redirect path from location state or default to home
    const from = location.state?.from || '/';

    const handleGoogleLogin = () => {
        setLoading({ ...loading, google: true });
        loginGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('Error logging in with Google:', error);
                console.error(`Google login failed: ${error.message}`);
            })
            .finally(() => {
                setLoading({ ...loading, google: false });
            });
    };

    const handleGithubLogin = () => {
        setLoading({ ...loading, github: true });
        loginGithub()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error('Error logging in with Github:', error);
                console.log(`GitHub login failed: ${error.message}`);
            })
            .finally(() => {
                setLoading({ ...loading, github: false });
            });
    };

    // If user is already logged in, don't show login buttons
    if (user) {
        return null;
    }

    return (
        <div className='space-y-5'>
            <p className='font-bold text-xl'>Login with</p>
            <div className='flex flex-col gap-2'>
                <button
                    onClick={handleGoogleLogin}
                    disabled={loading.google}
                    className='btn btn-secondary btn-outline'
                >
                    {loading.google ? (
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                    ) : (
                        <FcGoogle size={24} />
                    )}
                    Login With Google
                </button>

                <button
                    onClick={handleGithubLogin}
                    disabled={loading.github}
                    className='btn btn-primary btn-outline'
                >
                    {loading.github ? (
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                    ) : (
                        <FaGithub size={24} />
                    )}
                    Login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;