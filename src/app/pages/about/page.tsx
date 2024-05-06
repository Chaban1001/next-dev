import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};



export default function About() {
  return (
    <div className={styles.box}>
      <h1 className={styles.home__heading}>About</h1>
    </div>
  );
}
