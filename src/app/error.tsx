'use client';

export default function NotFound({ error }: { error: Error }) {
  return <h1>Oops {error.message}</h1>;
}
