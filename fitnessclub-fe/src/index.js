// index.js // src/index.js //

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './component/Login';
import Classes from './component/Classes';
// import DataFetcher from './api/DataFetcher';
import Payment from './component/Payment';
import Contact from './component/Contact';
import Trainers from './component/TrainersPage';
import Register from './component/Register';
import Pricing from './component/Pricing';
import Pay from './component/Pay';
import Success from './component/Success';
import Fail from './component/Fail';
import Auth from './component/Auth';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/payment',
    element:<Pay/>,
  },
  {
    path:'/success',
    element:<Success/>,
  },
  {
    path:'/fail',
    element:<Fail/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/register',
    element:<Register/>,
  },
  {
    path:'/pricing',
    element:<Pricing/>,
  },
  {
    path:'/classes',
   
    element:<Classes/>,
    
  },
  {
    path:'/trainers',
   
    element:<Trainers/>,
    
  },
  {
    path:'/payment',
    element:<Payment/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </Auth> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
