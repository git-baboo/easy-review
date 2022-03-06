import { GithubAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useRouter } from "next/router";

import { currentUserActions } from "@/store/currentUserState";
import { auth } from "@/utils/firebase";

export const useAuth = () => {
  const router = useRouter();
  const updateCurrentUser = currentUserActions.useUpdateCurrentUser();
  const provider = new GithubAuthProvider();
  provider.addScope("repo");

  const login = () => {
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
    updateCurrentUser({
      isSignedIn: false,
      username: "",
      accessToken: "",
      reviewId: 0,
    });
    router.push("/login");
  };

  return { login, logout };
};
