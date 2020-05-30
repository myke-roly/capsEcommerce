import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 Not found</title>
      </Head>
      <div>
        <p onClick={() => router.back()}>{'< '} Volver al atras</p>
        <img src="./404.svg" alt="not-found" />
      </div>
      <style jsx>{`
        p {
            cursor: pointer;
            display: block;
            margin: 1rem;
            color: #333;
        }
      `}
      </style>
    </>
  );
};

export default NotFound;
