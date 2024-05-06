import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { FC } from 'react';
import { NavBar } from '../NavBar/NavBar';

export interface Paths {
  label: string;
  href: string;
}

export const NavBarPaths: Paths[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/pages/about' },
  { label: 'Blog', href: '/pages/blog' },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__headerNav}>
        <ul className={styles.menu}>
          <NavBar navLinks={NavBarPaths} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
