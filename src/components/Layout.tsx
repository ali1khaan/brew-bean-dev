import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '@/styles/layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      <Navbar />
      <main id="main-content" className={styles.mainContent} tabIndex={-1}>
        {children}
      </main>
      <Footer /> {}
    </>
  );
}
