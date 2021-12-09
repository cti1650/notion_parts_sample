import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

const Home = () => {
  const handleClick = () => {
    alert('ok');
  };
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>Test</title>
      </Head>
      <button className="px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
