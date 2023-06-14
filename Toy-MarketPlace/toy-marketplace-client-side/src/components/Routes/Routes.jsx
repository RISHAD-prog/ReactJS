import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import ViewcategoryDetails from "../Pages/ViewcategoryDetails/ViewcategoryDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import ShowToys from "../Pages/ShowToys/ShowToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'categoryDetails/:id',
                element: <PrivateRoute><ViewcategoryDetails></ViewcategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://herotoyz-server.vercel.app/toyCategory/${params.id}`)
            },
            {
                path: 'toy',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://herotoyz-server.vercel.app/totalToy')
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ShowToys></ShowToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://herotoyz-server.vercel.app/allToyz/${params.id}`)
            },
            {
                path: 'addtoy',
                element: <PrivateRoute> <AddToy></AddToy></PrivateRoute>

            },
            {
                path: 'userToy',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://herotoyz-server.vercel.app/allToyz/${params.id}`)
            },
            {
                path: 'blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            }

        ]
    },
]);
export default router;