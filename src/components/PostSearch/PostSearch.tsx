'use client';

import { FC, FormEventHandler, useState } from 'react';
import styles from '@/styles/search.module.scss';
import { Post } from '@/app/pages/blog/page';
import { getPosts, getPostsBySearch } from '@/app/api/getPosts';

type Props = {
  onSearch: (posts: Post[]) => void;
};

export const PostSearch: FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className={styles.search__form}
    >
      <label htmlFor='search' className={styles.search__label}>
        <input
          type='search'
          id='search'
          className={styles.search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          name='search'
        />
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};
