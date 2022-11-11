import "../styles/global.css"
import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react";
import {trpc} from "../utils/trpc";
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}: AppProps) {
  return (
    // @ts-ignore
    <SessionProvider session={pageProps.session}>
      <div className="bg-slate-900 min-h-screen text-white">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)