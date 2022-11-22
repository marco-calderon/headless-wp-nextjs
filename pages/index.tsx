import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import usePosts from '../lib/hooks/usePosts';

export default function Home() {
  const [page, setPage] = useState(1);
  const { posts } = usePosts(page);

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-700 flex flex-col p-20 gap-5">
        {posts &&
          posts.map((p) => (
            <Link key={p.id} href={`/${p.id}`}>
              <Post post={p} />
            </Link>
          ))}
      </div>
    </Layout>
  );
}
