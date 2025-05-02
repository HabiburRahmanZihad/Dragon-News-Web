import React from 'react';
// import { use } from 'react';
import { Navigate } from 'react-router';
// import { AuthContext } from '../Provider/AuthContext';

const Home = () => {
    // const { user } = use(AuthContext);

    // if (!user) {
    //     return <Navigate to='/auth' replace={true} />;
    // }

    return <Navigate to='/category/1'></Navigate>


};

export default Home;