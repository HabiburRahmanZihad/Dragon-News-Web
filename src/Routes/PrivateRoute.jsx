import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { useNavigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>Loading...</div>
    }

    if (!user) {
        return navigate('/auth', { replace: true });
    }

    return children;
};

export default PrivateRoute;