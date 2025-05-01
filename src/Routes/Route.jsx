import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>error</p>,

        children: [
            { index: true, element: <Home></Home> },

            {
                path: 'category/:id',
                loader : () => fetch('/news.json'),
                Component: CategoryNews,
                hydrateFallbackElement: <p>Loading...</p>,
            },
        ]
    },


    { path: 'about', element: <h1>about</h1> },

    { path: 'career', element: <h1>career</h1> },
]);
