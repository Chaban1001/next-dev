import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
};

export default function Team() {
  return <h1 className={styles.home__heading}>Team</h1>;
}
