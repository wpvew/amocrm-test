import React from 'react';
import styles from './layout.scss';
import common from '@styles/_common.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <section className={styles.section}>
      <div className={common.container}>{children}</div>
    </section>
  );
}
