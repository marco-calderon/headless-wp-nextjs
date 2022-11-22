import React from 'react';
import { PostModel } from '../lib/models/post.model';

export type PostProps = {
  post: PostModel;
};

const Post = ({ post }: PostProps) => {
  return (
    // Card container
    <div className="flex flex-row w-full bg-white dark:bg-black rounded-xl py-10 px-8 gap-10 cursor-pointer">
      {/* Inner content */}
      <div className="d-flex flex-col gap-3">
        <span className="text-sm capitalize text-slate-500 dark:text-slate-300 font-bold">
          {post.date}
        </span>

        <h2 className="text-lg text-black dark:text-white font-bold line-clamp-2 pt-5">
          {post.title}
        </h2>

        <p className="text-md text-black dark:text-white font-regular line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      <div className="rounded-lg">
        <picture>
          <source srcSet={post.attachment_image.img_srcset} type="image/jpg" />
          <img
            src={post?.attachment_image.img_src}
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
