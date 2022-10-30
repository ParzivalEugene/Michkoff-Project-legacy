import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {SessionProvider} from "next-auth/react";
import {trpc} from "../utils/trpc";

function MyApp({Component, pageProps}: AppProps) {
  return (
    // @ts-ignore
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)