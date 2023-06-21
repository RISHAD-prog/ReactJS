
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import ManageClass from "../components/Dashboard/Admin/ManageClass/ManageClass";
import ManageUser from "../components/Dashboard/Admin/ManageUser/ManageUser";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import MyClass from "../components/Dashboard/Instructor/MyClass/MyClass";
import AddClass from "../components/Dashboard/Instructor/AddClass/AddClass";
import SelectedClass from "../components/Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../components/Dashboard/Student/EnrolledClass/EnrolledClass";
import ApprovedClass from "../pages/ApprovedClass/ApprovedClass";
import Payment from "../components/Dashboard/Student/Payment/Payment";
import Instructors from "../pages/Instructor/Instructors";
import PaymentHistory from "../components/Dashboard/Student/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Registration />
            },
            {
                path: 'approvedClasses',
                element: <PrivateRoute><ApprovedClass></ApprovedClass> </PrivateRoute>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "manageClass",
                element: <ManageClass />
            },
            {
                path: "manageUser",
                element: <ManageUser />
            },
            {
                path: "myClass",
                element: <MyClass></MyClass>
            },
            {
                path: "addClass",
                element: <AddClass></AddClass>
            },
            {
                path: "selectedClass",
                element: <SelectedClass></SelectedClass>
            },
            {
                path: "enrolledClass",
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);