import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};
export default function Home() {
  return <h1 className={styles.home__heading}>Home</h1>;
}
