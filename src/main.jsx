import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from '../src/components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Transmit from './components/Dashboard/Dashboard.jsx'; // This is your Dashboard component
import Layout from '../src/Layout.jsx';
import AuthForm from './components/AuthForm.jsx';
import DeviceDetail from './components/Dashboard/DeviceDetail.jsx'; // Import the DeviceDetail component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/transmit' element={<Transmit />} />
      <Route path='/auth' element={<AuthForm />} />
      <Route path='/device/:id' element={<DeviceDetail />} /> {/* Route for device details */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
);
