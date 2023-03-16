import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/page.module.css'
import Header from '@/component/header/header'
import Login from '@/component/login/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Venue</title>
        <meta name="description" content="venue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <Login />
      </main>
    </>
  )
}
