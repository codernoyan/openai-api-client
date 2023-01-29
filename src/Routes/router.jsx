/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import Register from '../Components/Register';
import Spinner from '../Components/Spinner';
import Main from '../Layouts/Main';
import PrivateRoute from './PrivateRoute';

const OpenChat = React.lazy(() => import('../Components/OpenChat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/open-chat',
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <OpenChat />
            </PrivateRoute>
          </React.Suspense>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
