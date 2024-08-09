import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

interface PrivateRouteProps {
  element: JSX.Element;
}

function PrivateRoute({ element }: PrivateRouteProps) {
  const userName = useSelector((state: RootState) => state.user.userName);

  if (userName) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
