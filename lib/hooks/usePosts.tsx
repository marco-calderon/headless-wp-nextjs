import useSWR from 'swr';
import fetcher from '../fetcher';
import { PostModel } from '../models/post.model';
import { RenderedPostModel } from '../models/rendered-post.model';

export default function usePosts(page: number) {
  const { data, error } = useSWR<RenderedPostModel[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts?page=${page}&per_page=10&_embed`,
    fetcher
  );

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
