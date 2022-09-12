import { FC } from 'react';

import styles from './Statistics.module.scss';
import TableLinks from './TableLinks/TableLinks';

const Statistics: FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Статистика по созданным ссылкам</h2>
      <TableLinks />
    </div>
  );
};

export default Statistics;
