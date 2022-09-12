import { Button, Input } from 'antd';
import cn from 'classnames';
import { FC } from 'react';
import { toast } from 'react-toastify';

import styles from './ResultLink.module.scss';

interface IResultLinkProps {
  short: string;
  target: string;
}

const ResultLink: FC<IResultLinkProps> = props => {
  const { short, target } = props;

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);

    toast.success('Ссылка скопирована в буфер обмена!', {
      toastId: `${url}`,
      autoClose: 1000,
    });
  };

  return (
    <div className={styles.result}>
      <div className={cn(styles.content, styles.init)}>
        <Input className={styles.input} value={target} readOnly={true} />

        <Button
          className={styles.button}
          onClick={() => handleCopy(target)}
          type='primary'
        >
          Копировать
        </Button>
      </div>

      <div className={cn(styles.content, styles.short)}>
        <Input className={styles.input} value={short} readOnly={true} />

        <Button
          className={styles.button}
          onClick={() => handleCopy(short)}
          type='primary'
        >
          Копировать
        </Button>
      </div>
    </div>
  );
};

export default ResultLink;
