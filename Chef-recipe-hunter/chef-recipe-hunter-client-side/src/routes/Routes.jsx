import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Chefs from '../pages/Shared/Home/Chefs/Chefs';
import ChefDetails from '../pages/Shared/Home/ChefDetails/ChefDetails';

import Login from '../pages/Form/Login/Login';
import Register from '../pages/Form/Register/Register';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/blogs/Blog';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Chefs></Chefs>,
                loader: () => fetch('https://foodverse-rishad-prog.vercel.app/chef')
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "chef/:id",
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://foodverse-rishad-prog.vercel.app/chef/${params.id}`)
            },
            {
                path: "blog",
                element: <Blog></Blog>
            }
        ]
    }
])


export default router;