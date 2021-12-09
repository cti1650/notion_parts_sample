import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <a href="https://www.google.com/" rel="nofollow noreferrer noopener" target="_blank" className="px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg">
        Click
      </a>
    </div>
  );
};

export default Home;
