import useSWR from 'swr';
import fetcher from '../fetcher';
import { RenderedPostModel } from '../models/rendered-post.model';

export default function usePost(id: number) {
  const { data, error } = useSWR<RenderedPostModel>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/wp-json/wp/v2/posts/${id}`,
    fetcher
  );

  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  };
}
