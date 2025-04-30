import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>error</p>,


        children: [

            // { index: true, element: <Home></Home> },

            { path: 'auth', element: <h1>auth</h1> },

            { path: 'news', element: <h1>news</h1> },

        ]
    },
]);
