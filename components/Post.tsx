import React from 'react';
import { PostModel } from '../lib/models/post.model';
import { RenderedPostModel } from '../lib/models/rendered-post.model';

export type PostProps = {
  post: RenderedPostModel;
};

const Post = ({ post }: PostProps) => {
  return (
    // Card container
    <div className="flex flex-row w-full gap-10 px-8 py-10 bg-white cursor-pointer dark:bg-black rounded-xl">
      {/* Inner content */}
      <div className="flex-col gap-3 d-flex">
        <span className="text-sm font-bold capitalize text-slate-500 dark:text-slate-300">
          {post.date}
        </span>

        <h2 className="pt-5 text-lg font-bold text-black dark:text-white line-clamp-2">
          {post.title.rendered}
        </h2>

        <p
          className="text-black text-md dark:text-white font-regular line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></p>
      </div>

      <div className="rounded-lg">
        <picture>
          <source
            srcSet={post._embedded['wp:featuredmedia'][0].source_url}
            type="image/jpg"
          />
          <img
            src={post._embedded['wp:featuredmedia'][0].source_url}
            width={500}
            height={400}
            alt="Post image"
            className="max-w-unset rounded-lg w-[300px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default Post;
