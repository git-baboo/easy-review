import firebase from 'firebase/compat';

const initialState = {};

type Action = {
  type: 'login' | 'logout';
  payload?: {
    user: firebase.User;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'login':
      return action.payload?.user;
    case 'logout':
      return initialState;
    default:
      return state;
  }
};

export default {
  initialState,
  reducer,
};
