import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
};

const enum BlogPath {
  POST = '/pages/blog/post',
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Unable to fetch!');
  }
  return response.json();
}

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <Fragment>
      <h1 className={styles.home__heading}>Blog</h1>

      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link style={{ color: '#313131' }} href={`/pages/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
