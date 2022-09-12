import { Button } from 'antd';
import { FC, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

import AuthForm from '../../components/layout/AuthForm/AuthForm';
import { useAuth } from '../../hooks/useAuth';

import styles from './Auth.module.scss';
import { authType } from './auth.interface';

const Auth: FC = () => {
  const { user, isLoading, accessToken } = useAuth();

  const [type, setType] = useState<authType>('login');

  const handleType = useCallback(
    (newType: authType) => {
      if (newType !== type) {
        setType(newType);
      }
    },
    [type],
  );

  if (user && accessToken) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            onClick={() => handleType('login')}
            type='primary'
          >
            Вход
          </Button>
          <Button
            className={styles.button}
            onClick={() => handleType('register')}
            type='primary'
          >
            Регистрация
          </Button>
        </div>
        <AuthForm type={type} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Auth;
