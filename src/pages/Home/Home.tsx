import { Button } from 'antd';
import { FC } from 'react';

import Footer from '../../components/layout/Footer/Footer';
import ShortLink from '../../components/layout/ShortLink/ShortLink';
import Statistics from '../../components/layout/Statistics/Statistics';
import { useActions } from '../../hooks/useActions';

import styles from './Home.module.scss';

const Home: FC = () => {
  const { logout } = useActions();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Сервис сокращения ссылок</h1>
        <ShortLink />
        <Statistics />
        <Footer />
      </div>
      <Button className={styles.exit} onClick={logout} type='primary'>
        Выйти
      </Button>
    </div>
  );
};

export default Home;
