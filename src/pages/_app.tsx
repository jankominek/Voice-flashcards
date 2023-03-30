import '@/styles/globals.css'
import { PageWrapper } from '@/styles/mainPage.styled'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  )
}
