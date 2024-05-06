import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

async function getPosts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPosts(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPosts(id);
  return (
    <div>
      <h1>Post {id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
