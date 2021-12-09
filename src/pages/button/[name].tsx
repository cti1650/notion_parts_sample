import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  console.log(router);
  const titleName = router.query.name;
  const url = router.query?.url || '/';
  const handleClick = () => {
    window.alert('ok');
  };
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>Test</title>
        <meta property='og:title' content='Tailwind CC' />
      </Head>
      <button className="px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg" onClick={handleClick}>
        {titleName}
      </button>
      {~url.indexOf('http') ? (<a href={url} className="px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg" >link</a>):null}
    </div>
  );
};

export default Home;
