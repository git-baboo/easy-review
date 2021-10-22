import React, { ComponentType } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useCurrentUser } from '@/hooks/useCurrentUser';

type Props = {
  path: string;
  component: ComponentType;
};

const PrivateRoute = ({ path, component }: Props) => {
  const { isSignedIn } = useCurrentUser();

  return isSignedIn ? <Route exact path={path} component={component} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
