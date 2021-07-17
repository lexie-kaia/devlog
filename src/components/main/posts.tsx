import React from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { PostType } from './postitem';
import { useMemo } from 'react';

type Props = {
  allPosts: PostQlDataType[];
  currentTag: string;
};

export type PostQlDataType = {
  node: {
    frontmatter: PostType;
    id: string;
  };
};

const PostList = styled.ul``;

function Posts({ allPosts, currentTag }: Props) {
  const posts = useMemo(() => {
    return allPosts.filter((post: PostQlDataType) => {
      const {
        node: {
          frontmatter: { tags },
        },
      } = post;

      return currentTag !== 'all' ? tags.includes(currentTag) : true;
    });
  }, [currentTag]);

  return (
    <PostList>
      {posts.map(
        ({
          node: {
            frontmatter: { ...props },
            id: id,
          },
        }) => (
          <PostItem key={id} {...props} />
        )
      )}
    </PostList>
  );
}

export default Posts;
