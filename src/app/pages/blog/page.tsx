'use client';

import { getPosts } from '@/app/api/getPosts';
import { PostSearch } from '@/components/PostSearch/PostSearch';
import { Posts } from '@/components/Posts/Posts';
import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

const enum BlogPath {
  POST = '/pages/blog/post',
}

export type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Fragment>
      <h1 className={styles.home__heading}>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </Fragment>
  );
}
