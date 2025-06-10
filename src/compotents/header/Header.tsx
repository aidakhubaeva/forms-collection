import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
          <header className={styles.header}>
            <h1 className={styles.title}>
              form<br />
              collection
            </h1>
            <div className={styles.lines} />
          </header>
  );
};

export default Header;