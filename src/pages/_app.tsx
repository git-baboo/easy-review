import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useReducer } from "react";
import { RecoilRoot } from "recoil";

import AuthContext from "@/components/AuthContext";
import authReducer from "@/utils/authReducer";
import "@/style/difffile.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [state] = useReducer(authReducer.reducer, authReducer.initialState);

  return (
    <AuthContext.Provider value={state}>
      <ChakraProvider>
        <RecoilRoot>
          <Head>
            <title>Easy Review</title>
          </Head>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </AuthContext.Provider>
  );
};

export default MyApp;
