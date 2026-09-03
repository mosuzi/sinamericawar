import type { AppProps } from 'next/app'
import ReadingTracker from '../components/ReadingTracker'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReadingTracker />
      <Component {...pageProps} />
    </>
  )
}
