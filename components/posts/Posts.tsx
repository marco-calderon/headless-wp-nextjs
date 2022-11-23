import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react';
import usePosts from '../../lib/hooks/usePosts';
import Post from '../Post';

const QUERY = gql`
  query GET_PAGINATED_POSTS(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          postId
          title
        }
      }
    }
  }
`;

const ANOTHER_QUERY = gql`
  {
    posts {
      nodes {
        id
        isPreview
        title
        modified
        excerpt
        featuredImage {
          node {
            srcSet
            link
          }
        }
      }
    }
  }
`;

const Posts = () => {
  // const { posts, isLoading, isError } = usePosts(1);
  const { data: posts, loading: isLoading } = useQuery(ANOTHER_QUERY);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return <p>{JSON.stringify(posts)}</p>;

  return (
    <div className="flex flex-col gap-5">
     
    </div>
  );
};

export default Posts;
