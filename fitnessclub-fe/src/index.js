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
import DataFetcher from './api/DataFetcher';
import Add from './component/Add';
import Contact from './component/Contact';
import Register from './component/Register';
import Pricing from './component/Pricing';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
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
   
    element:<DataFetcher/>,
    
  },
  {
    path:'/addtrainers',
    element:<Add/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
