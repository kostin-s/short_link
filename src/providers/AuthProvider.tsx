import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const localion = useLocation();
  const { user, accessToken } = useAuth();

  if (!user || !accessToken) {
    return <Navigate to='/auth' state={{ from: localion }} />;
  }

  return <>{children}</>;
};

export default AuthProvider;
