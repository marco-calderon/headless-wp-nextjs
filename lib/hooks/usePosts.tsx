import useSWR from 'swr';
import fetcher from '../fetcher';
import { PostModel } from '../models/post.model';

export default function usePosts(page: number) {
  const { data, error } = useSWR<{ posts_data: PostModel[] }>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/rae/v1/posts?page_no=${page}`,
    fetcher
  );

  return {
    posts: data?.posts_data,
    isLoading: !error && !data,
    isError: error,
  };
}
