import { Octokit } from '@octokit/rest';
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { currentUserState } from '@/store/currentUserState';
import { CurrentUserType } from '@/types/CurrentUserType';
import { auth } from '@/utils/firebase';

export const useAuth = () => {
  const history = useHistory();
  const setCurrentUser = useSetRecoilState<CurrentUserType>(currentUserState);
  const provider = new GithubAuthProvider();
  provider.addScope('repo');

  const login = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;

        const octokit = new Octokit({
          auth: token,
        });

        octokit.request('GET /user').then((res) => {
          setCurrentUser((prevState) => ({
            ...prevState,
            username: res.data.login,
          }));
        });

        setCurrentUser((prevState) => ({
          ...prevState,
          isSignedIn: true,
          accessToken: String(token),
        }));

        history.push('/');
      }
    });
  };

  const logout = () => {
    signOut(auth);
    setCurrentUser({
      isSignedIn: false,
      username: '',
      accessToken: '',
    });
    history.push('/login');
  };

  return { login, logout };
};
