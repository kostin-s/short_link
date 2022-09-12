import { Table } from 'antd';
import { Skeleton } from 'antd';

import { IShortLink } from '../../../../store/api/api.interface';

import styles from './TableLinks.module.scss';
import { useTableLinks } from './useTableLinks';

const TableLinks = () => {
  const { columns, statistics } = useTableLinks();

  if (!statistics) {
    return (
      <div className={styles.loading}>
        <Skeleton.Button active />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Table<IShortLink>
        showSorterTooltip={false}
        columns={columns}
        dataSource={statistics}
        pagination={false}
      />
    </div>
  );
};

export default TableLinks;
