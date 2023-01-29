/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext/AuthContext';
import Spinner from './Spinner';

export default function Register() {
  const {
    createUser, loading, setLoading, googleAuth,
  } = useContext(AuthProvider);

  const navigate = useNavigate();
  // Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create user with email password
    createUser(email, password)
      .then((result) => {
        const { user } = result;
        toast.success('Login Successful.', {
          style: {
            border: '1px solid #713200',
            padding: '12px',
            color: '#03001C',
          },
          iconTheme: {
            primary: '#06B6D4',
            secondary: '#FFFAEE',
          },
        });
        setLoading(false);
        navigate('/');
        console.log(user);
      }).catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleGoogleRegister = () => {
    googleAuth()
      .then((result) => {
        const { user } = result;
        // toast
        toast.success('Login Successful.', {
          style: {
            border: '1px solid #713200',
            padding: '12px',
            color: '#03001C',
          },
          iconTheme: {
            primary: '#06B6D4',
            secondary: '#FFFAEE',
          },
        });
        setLoading(false);
        navigate('/');
        console.log(user);
      }).catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center dark:text-gray-200">
            Register
          </h3>
          <form onSubmit={handleRegister}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 border rounded-lg bg-gray-800 dark:border-gray-600 dark:placeholder-gray-100 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                required
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-200 border rounded-lg bg-gray-800 dark:border-gray-600 dark:placeholder-gray-100 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                required
              />
            </div>
            <div>
              <div className="my-4">
                <button className="font-semibold bg-cyan-500 hover:bg-cyan-700 transition-colors w-full py-2 rounded-sm" type="submit">Register</button>
              </div>
            </div>
          </form>
          {/* google register button */}
          <div className="text-center">
            <button onClick={handleGoogleRegister} className="font-semibold hover:text-cyan-400 transition-colors" type="submit">Register With Google</button>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-700">
          <span className="text-sm text-gray-200">
            Already have an account?
            {' '}
          </span>
          <Link
            to="/login"
            className="mx-2 text-sm font-bold text-cyan-500 dark:text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
