import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';

import { IShortLink } from '../../../../store/api/api.interface';

import { useTypedSelector } from './../../../../hooks/useTypedSelector';
import styles from './TableLinks.module.scss';

export const useTableLinks = () => {
  const columns: ColumnsType<IShortLink> = [
    {
      title: 'Ссылки',
      render: (record: { short: string; target: string; counter: number }) => (
        <>
          <div className={styles.link}>
            1. <a href={`${record.short}`}>{record.short}</a>
          </div>
          <div className={styles.link}>2. {record.target}</div>
          {<div>3. Переходов = {record.counter}</div>}
        </>
      ),
      responsive: ['xs'],
    },
    {
      title: 'Короткая ссылка',
      dataIndex: 'short',
      key: 'short',
      sorter: (a: { short: string }, b: { short: string }) =>
        a.short.length - b.short.length,
      width: '30%',
      render: (short: string) => (
        <>
          <a href={`${short}`} target='_blank' rel='noreferrer'>
            {short}
          </a>
        </>
      ),
      responsive: ['sm'],
    },
    {
      title: 'Исходная ссылка',
      dataIndex: 'target',
      key: 'target',
      sorter: (a: { target: string }, b: { target: string }) =>
        a.target.length - b.target.length,
      width: '50%',
      render: (target: string) => (
        <>
          <a href={`${target}`} target='_blank' rel='noreferrer'>
            {target}
          </a>
        </>
      ),
      responsive: ['sm'],
    },
    {
      title: 'Переходы',
      dataIndex: 'counter',
      key: 'counter',
      sorter: (a: { counter: number }, b: { counter: number }) =>
        a.counter - b.counter,
      width: '20%',
      responsive: ['sm'],
    },
  ];

  const statistics = useTypedSelector(state => state.links.links);

  return useMemo(
    () => ({
      columns,
      statistics,
    }),
    // eslint-disable-next-line
    [statistics],
  );
};
