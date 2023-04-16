import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootRoutes } from './routes';

const mainRouter = createBrowserRouter(RootRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={mainRouter} />
);

reportWebVitals();
