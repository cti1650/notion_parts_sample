

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AiFillGithub } from 'react-icons/ai';

const Home = () => {
  const router = useRouter();
  const { user } = router.query;
  const url = 'https://github.com/';
  return (
    <div>
      <Head>
        <title>Test</title>
        <meta property='og:title' content='Tailwind CC' />
      </Head>
      
      <span>
        <a href={url + user}
        rel="nofollow noreferrer noopener"
        target="_blank"
        className="flex flex-row items-center justify-items-center px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg"
        >
          <span className="px-0.5"><AiFillGithub /></span><span>{user}</span>
        </a>
      </span>
    </div>
  );
};

export default Home;
