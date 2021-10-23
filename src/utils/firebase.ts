import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
export const auth = getAuth();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const listenAuthState = (dispatch: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return onAuthStateChanged(auth, (user: any) => {
    if (user) {
      // User is signed in.
      dispatch({
        type: 'login',
        payload: {
          user,
        },
      });
    } else {
      // User is signed out.
      // ...
      dispatch({
        type: 'logout',
      });
    }
  });
};
