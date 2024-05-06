import { Post } from '@/app/pages/blog/page';
import Link from 'next/link';

type Props = {
  posts: Post[];
};
export const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link href={`/pages/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
