import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/errorPage/Error_Page';
import Main from './components/Main/Main';
import Jobdetails from './components/Jobdetails/Jobdetails';
import JobApp from './components/JobApp/JobApp';
import LocalStorageData from './LocalStorageData/LocalStorageData';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('/category.json')
      },
      {
        path: 'job/:jobId',
        element: <Jobdetails></Jobdetails>,
        loader: ({ params }) => fetch(`job/${params.jobId}`)
      },
      {
        path: 'jobapp',
        element: <JobApp></JobApp>,
        loader: LocalStorageData
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
