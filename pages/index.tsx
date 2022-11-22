import { useState } from 'react';
import ClientOnly from '../components/ClientOnly';
import Layout from '../components/Layout';
import Posts from '../components/posts/Posts';

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <div className="flex flex-col bg-gray-100 dark:bg-gray-700">
        {/* Hero */}
        <div className="text-center bg-gray-100 py-80 px-36 dark:bg-gray-800">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-300">
            Everything begins with an idea. And the idea transforms it into
            actions.
          </h1>
        </div>

        {/* All posts */}
        <div className="flex flex-col gap-5 p-20 bg-gray-200 dark:bg-gray-700">
          <ClientOnly>
            <Posts />
          </ClientOnly>
        </div>
      </div>
    </Layout>
  );
}
