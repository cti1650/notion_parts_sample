import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const Home = ({name}) => {
  const handleClick = () => {
    window.alert('ok');
  };
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Head>
        <title>Test</title>
        <meta property='og:title' content='Tailwind CC' />
      </Head>
      <button className="px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};
export const getStaticProps = async ({ params }) => {  
  return {
    props: {
      name:params.name || ''
    },
  };
};

export default Home;
