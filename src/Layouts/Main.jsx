/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
