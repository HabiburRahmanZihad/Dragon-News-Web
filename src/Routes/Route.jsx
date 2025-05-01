import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>error</p>,

        children: [
            { index: true, element: <Home></Home> },

            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                Component: CategoryNews,
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

    { path: 'career', element: <h1>career</h1> },
]);
