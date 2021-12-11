import { ChakraProvider } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import { RecoilRoot } from "recoil";

import AuthContext from "@/components/AuthContext";
import authReducer from "@/utils/authReducer";
import { auth } from "@/utils/firebase";
import "@/style/difffile.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [state] = useReducer(authReducer.reducer, authReducer.initialState);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);

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
