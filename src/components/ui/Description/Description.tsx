import { FC } from 'react';

import styles from './Description.module.scss';

interface IDescriptionProps {
  children: React.ReactNode;
}

const Description: FC<IDescriptionProps> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

export default Description;
