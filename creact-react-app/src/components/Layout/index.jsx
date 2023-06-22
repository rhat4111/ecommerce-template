import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return <div className='font-theme text-dark'>
    <Header />
    <div className='min-h-screen pt-20'>
      <Outlet />
    </div>
  </div>
}

export default Layout;