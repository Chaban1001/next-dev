import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { FC } from 'react';

const enum NavBarPaths {
  HOME = '/',
  ABOUT = '/pages/about',
  BLOG = '/pages/blog',
}

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__headerNav}>
        <ul className={styles.menu}>
          <li className={styles.menu__listItem}>
            <Link href={NavBarPaths.HOME} className={styles.menu__listLink}>
              Home
            </Link>
          </li>
          <li className={styles.menu__listItem}>
            <Link href={NavBarPaths.ABOUT} className={styles.menu__listLink}>
              About
            </Link>
          </li>
          <li className={styles.menu__listItem}>
            <Link href={NavBarPaths.BLOG} className={styles.menu__listLink}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
