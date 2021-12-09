import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className='bg-white w-screen h-screen flex justify-center items-center content-center'>
        {children}
      </div>
    </>
  );
}
