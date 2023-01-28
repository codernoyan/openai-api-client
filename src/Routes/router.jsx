/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import NotFound from '../Components/NotFound';
import OpenChat from '../Components/OpenChat';
import Register from '../Components/Register';
import Main from '../Layouts/Main';

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
        element: <OpenChat />,
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
