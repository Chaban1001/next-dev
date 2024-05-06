import { ReactNode } from 'react';
import Link from 'next/link';

type Layout = {
  children: ReactNode;
};

const enum AboutPaths {
  CONTACTS = '/pages/about/contacts',
  TEAM = '/pages/about/team',
}

export default function AboutLayout({ children }: Layout) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <li style={{ listStyle: 'none' }}>
            <Link style={{ color: '#313131' }} href={AboutPaths.CONTACTS}>
              Contacts
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link style={{ color: '#313131' }} href={AboutPaths.TEAM}>
              Team
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
