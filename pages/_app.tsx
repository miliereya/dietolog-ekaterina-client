import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainProvider from '../context/mainContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Header />
      <div className="page_wrapper">
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </MainProvider>
  )
}
