import React from 'react';
import { Header } from '../../components/Header';
import { Hero } from './Hero';
import { Footer } from '../../components/Footer';
import styles from './home.scss';

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
