import '../styles/globals.css';
import { FC } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (<>
    <Head>
      <title>Arturo</title>
      <meta name="description" content="Arturo page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>);
}

export default MyApp
