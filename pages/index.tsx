import Head from 'next/head'
import HeaderBar from '../components/HeaderBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Let's art party</title>
        <meta name="description" content="Let's art party website" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="chat-notification-content">
        <header>
          <HeaderBar></HeaderBar>
        </header>
      </main>
    </>
  )
}
