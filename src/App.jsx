/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';

function App() {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
