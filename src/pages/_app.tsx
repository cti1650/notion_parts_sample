import 'tailwindcss/tailwind.css';

import React from 'react';
import { AppProps } from 'next/app';
import {Layout} from '@comp/layout/layout';
import Head from 'next/head';

const TailwindApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Layout>
      <Head>
        <title>Notion Parts Sample</title>
        <meta name='viewport' content='user-scalable=no' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,minimum-scale=1.0'
        ></meta>
        <meta name='keywords' content='Notion'></meta>
        <meta property='og:title' content='Notion Parts Sample' />
        <meta property='og:site_name' content='Notion Parts Sample' />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default TailwindApp;
