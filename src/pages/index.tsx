import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import {AppContext} from "next/app";
import Post from "@components/post";
import DefaultLayout from "@components/layout";

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Zetter Gallery Minecraft Authorization Prompt</title>
      <meta name="description" content="Authorize Zetter Gallery to check your Minecraft Account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultLayout>
      <Post uri={ 'http://[::1]:3000/static/generated/paintings/6a5a4cf8-9958-400c-bb8c-a9230debb6b7/original.png' }
            authorName={ 'Test' } name={ 'Test 1' } stats={ { favoritesAdded: 1, emeraldsPaid: 1 }} originalSize={ { height: 1, width: 1 } } />

      <Post uri={ 'http://[::1]:3000/static/generated/paintings/9866431a-da2a-489c-9b4f-50e4cd4e7ff0/original.png' }
            authorName={ 'Test' } name={ 'Test 2' } stats={ { favoritesAdded: 1, emeraldsPaid: 1 }} originalSize={ { height: 1, width: 1 } } />

      <Post uri={ 'http://[::1]:3000/static/generated/paintings/c2e1bbb7-b9b2-4644-b5f6-9d5d02888335/original.png' }
            authorName={ 'Test' } name={ 'Test 3' } stats={ { favoritesAdded: 1, emeraldsPaid: 1 }} originalSize={ { height: 1, width: 1 } } />
    </DefaultLayout>
  </>)
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
