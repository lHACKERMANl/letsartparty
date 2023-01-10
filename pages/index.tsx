import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Let's art party</title>
        <meta name="description" content="Let's art party website" />
        <meta name="viewport" content="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="chat-notification-content">
        <p className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">hello</p>
      </main>
    </>
  )
}
