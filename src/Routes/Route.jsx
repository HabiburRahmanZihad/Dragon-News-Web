import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';
import CategoryNews from '../Pages/CategoryNews';
import UserCareer from '../Components/UserCareer';
import NewsDetails from '../Pages/NewsDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>error</p>,

        children: [
            {
                index: true,
                element: <Home></Home>,
            },

            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                element: <CategoryNews></CategoryNews>,
                hydrateFallbackElement: <p>Loading...</p>,
            },
        ]
    },

    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        errorElement: <p>error</p>,

        children: [
            {
                index: true,
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            }
        ]
    },

    {
        path: 'career',
        element: <UserCareer></UserCareer>
    },
    {
        path: '/news-details/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute>,
        hydrateFallbackElement: <p>Loading...</p>,
    },
]);
