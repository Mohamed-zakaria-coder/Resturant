import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SmoothySense</title>
        <link rel="shortcut icon" href='/logo-2.png' type="image/x-icon" />
      </Head>
      <main className={`${rajdhani.className}`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
