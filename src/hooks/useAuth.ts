import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '@/utils/firebase';

export const useAuth = () => {
  const provider = new GithubAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        /* NOTE: 後の実装に必要
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
        }
       */

        const user = result.user;
        console.log(`displayName: ${user.displayName}`);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  return { login };
};
