import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "@/components/AuthProvider";
import "@/style/difffile.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider>
        <RecoilRoot>
          <Head>
            <title>Easy Review</title>
          </Head>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </AuthProvider>
  );
};

export default MyApp;
