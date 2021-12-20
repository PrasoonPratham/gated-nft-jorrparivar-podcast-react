import Head from 'next/head'
import React from 'react';
import video from './video';

const MyApp = () => {
  return (
    <>
    <Head>
      <script type="text/javascript" id="hs-script-loader" src="https://www.youtube.com/iframe_api" />
    </Head>

    <video/>
    </>
    
  )
}

export default MyApp;