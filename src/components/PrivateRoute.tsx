import { onAuthStateChanged } from 'firebase/auth';
import React, { ComponentType, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';

import { auth } from '@/utils/firebase';

type Props = {
  path: string;
  component: ComponentType;
};

const PrivateRoute = ({ path, component }: Props) => {
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      }
    });
  }, []);

  return <Route exact path={path} component={component} />;
};

export default PrivateRoute;
