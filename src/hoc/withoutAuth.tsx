import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect } from "react";

import { auth } from "@/utils/firebase";

// eslint-disable-next-line react/display-name
const withoutAuth = (Component: FunctionComponent) => () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return <Component />;
};

export default withoutAuth;
