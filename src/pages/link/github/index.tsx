

import React from 'react';
import Head from 'next/head';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { GitHubButton } from '@comp/button/GitHubButton';

const Home = () => {
  const router = useRouter();
  const user = router.query.user;
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
  
      <GitHubButton user={user} />
    </div>
  );
};

export default Home;
