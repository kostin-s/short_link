import { Button } from 'antd';
import { FC } from 'react';

import { useActions } from '../../../hooks/useActions';

import styles from './WithoutAuth.module.scss';

const WithoutAuth: FC = () => {
  const { login } = useActions();

  const handleAuth = () => {
    const username = localStorage.getItem('username');

    if (!username) {
      localStorage.setItem('username', 'username');
    }

    localStorage.setItem('accessToken', 'access');

    login({ username: username || 'username', password: 'username' });
  };

  return (
    <div className={styles.wrapper}>
      <Button className={styles.button} onClick={handleAuth}>
        Войти без регистрации
      </Button>
    </div>
  );
};

export default WithoutAuth;
