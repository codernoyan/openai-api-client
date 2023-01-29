/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext/AuthContext';
import Spinner from './Spinner';

export default function Navbar() {
  const {
    user, logOutUser, loading, setLoading,
  } = useContext(AuthProvider);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  // log out logged in user
  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        setLoading(false);
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
      }).catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  const menus = (
    <>
      <li role="none" className="flex items-stretch">
        <Link
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-cyan-500 lg:px-8"
          to="/"
        >
          <span>Home</span>
        </Link>
      </li>
      {
        user?.uid && (
        <li role="none" className="flex items-stretch">
          <Link
            className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-cyan-500 lg:px-8"
            to="/open-chat"
          >
            <span>OpenChat</span>
          </Link>
        </li>
        )
      }
      {
        !user?.uid
          ? (
            <>
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 text-cyan-500 transition-colors duration-300 hover:text-cyan-600 lg:px-8 font-bold"
                  to="/login"
                >
                  <span>Login</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-cyan-500 lg:pl-8 lg:pr-0"
                  to="/register"
                >
                  <span>Register</span>
                </Link>
              </li>
            </>
          )
          : (
            <li role="none" className="flex items-stretch">
              <button
                onClick={handleLogOutUser}
                type="button"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-cyan-500 lg:pl-8 lg:pr-0"
              >
                <span>Logout</span>
              </button>
            </li>
          )
      }

    </>
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {/* <!-- Component: Basic Navbar --> */}
      <header className="relative z-20 w-full shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-0 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700">
            {/*      <!-- Brand logo --> */}
            <div>
              <Link to="/" className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 font-siliguri font-bold text-white">
                OpenAI
                {' '}
                <span className="text-cyan-500">API</span>
              </Link>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              type="button"
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
                  : ''
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-200 transition duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                />
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full bg-white/5 justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-dark/80 px-2 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 font-siliguri text-white ${
                isToggleOpen
                  ? 'visible opacity-100 backdrop-blur-sm'
                  : 'invisible opacity-0'
              }`}
            >
              {menus}
            </ul>
          </nav>
        </div>
      </header>
      {/* <!-- End Basic Navbar--> */}
    </>
  );
}
