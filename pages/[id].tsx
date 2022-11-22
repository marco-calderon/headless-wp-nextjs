import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import usePost from '../lib/hooks/usePost';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeRewrite from 'rehype-rewrite';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { post } = usePost(Number(id));
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    const perform = async () => {
      const transformed = String(
        await unified()
          .use(rehypeParse)
          .use(rehypeRewrite, {
            rewrite: (node) => {
              if (node.type === 'element') {
                if (node.tagName === 'img') {
                  node!.properties!.className = 'pb-8 w-full';
                } else if (node.tagName === 'p') {
                  node!.properties!.className =
                    'text-xl px-12 pb-16 lg:px-72 md:px-36';
                }
              }
            },
          })
          .use(rehypeStringify)
          .process(post?.content.rendered ?? '')
      );
      setContentHtml(transformed);
    };
    perform();
  }, [post]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="flex flex-col">
        {/* Hero */}
        <div className="px-12 py-40 text-center bg-gray-100 dark:bg-gray-800">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-300">
            {post.title.rendered}
          </h1>
        </div>
        {/* Content */}
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="text-start"
        ></div>
      </div>
    </Layout>
  );
};

export default PostPage;
