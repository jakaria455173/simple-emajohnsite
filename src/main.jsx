import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './components/Layout/HomeLayout';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './Loaders/CartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element:<Shop/>
      },
      {
        path: 'orders',
        element: <Orders />,
        loader:cartProductLoader,
      },
      {
        path: "checkout",
        element:<Checkout/>
      },
      {
        path: "inventory",
        element:<Inventory/>
      },
      {
        path: 'login',
        element:<Login/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);