import type { AppProps } from 'next/app'
import { ImageProvider } from '../hooks/useImages'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ImageProvider>
  )
}

export default MyApp
