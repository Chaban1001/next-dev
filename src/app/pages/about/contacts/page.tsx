import { Metadata } from 'next';
import styles from '@/styles/page.module.scss';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  return <h1 className={styles.home__heading}>Contacts</h1>;
}
