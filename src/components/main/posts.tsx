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
    id: string;
    slug: string;
    frontmatter: PostType;
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
            id,
            slug,
            frontmatter: { ...props },
          },
        }) => (
          <PostItem key={id} slug={slug} {...props} />
        )
      )}
    </PostList>
  );
}

export default Posts;
