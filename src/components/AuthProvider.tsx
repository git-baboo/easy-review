import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "@/utils/firebase";

type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [signInCheck, setSignInCheck] = useState<boolean>(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signInCheck }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
