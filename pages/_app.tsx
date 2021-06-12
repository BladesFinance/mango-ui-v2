import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import '../styles/index.css'
import useWallet from '../hooks/useWallet'
import useHydrateStore from '../hooks/useHydrateStore'
import Notifications from '../components/Notification'

function App({ Component, pageProps }) {
  useHydrateStore()
  useWallet()

  return (
    <>
      <Head>
        <title>Blades Leverage Trading</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Blades, Leverage, Leverage Trading, Blades Leverage Trading, Serum, SRM, Serum DEX, DEFI, Decentralized Finance, Decentralised Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SerumBTC, SerumUSD, SRM Tokens, SPL Tokens"
        />
        <meta
          name="description"
          content="Blades Leverage Trading - Decentralised, cross-margin trading up to 5x leverage with lightning speed and near-zero fees powered by Serum."
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blades Leverage Trading" />
        <meta
          name="twitter:description"
          content="Blades Leverage Trading - Next Generation, blazing fast, decentralised, cross-margin trading up to 5x leverage with nearly zero fees."
        />
        <meta name="twitter:image" content="https://i.imgur.com/MfxQycw.jpg" />

        <script src="/datafeeds/udf/dist/polyfills.js"></script>
        <script src="/datafeeds/udf/dist/bundle.js"></script>

        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <ThemeProvider defaultTheme="Mango">
        <Component {...pageProps} />
        <Notifications />
      </ThemeProvider>
    </>
  )
}

export default App
