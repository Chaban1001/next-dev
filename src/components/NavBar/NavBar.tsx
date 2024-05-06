'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/header.module.scss';

interface navLink {
  label: string;
  href: string;
}

type navLinks = {
  navLinks: navLink[];
};

export const NavBar = ({ navLinks }: navLinks) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href} className={styles.menu__listItem}>
            <Link
              className={isActive ? styles.active : styles.menu__listLink}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};
