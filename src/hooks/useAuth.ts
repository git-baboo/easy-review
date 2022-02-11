import { GithubAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

import { currentUserState } from "@/store/currentUserState";
import { CurrentUserType } from "@/types/CurrentUserType";
import { auth } from "@/utils/firebase";

export const useAuth = () => {
  const router = useRouter();
  const setCurrentUser = useSetRecoilState<CurrentUserType>(currentUserState);
  const provider = new GithubAuthProvider();
  provider.addScope("repo");

  const login = () => {
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
    setCurrentUser({
      isSignedIn: false,
      username: "",
      accessToken: "",
      reviewId: 0,
    });
    router.push("/login");
  };

  return { login, logout };
};
