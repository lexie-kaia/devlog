import React from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostType } from './postitem';

type Props = {
  allPosts: PostQlDataType[];
};

export type PostQlDataType = {
  node: {
    frontmatter: PostType;
    id: string;
  };
};

const PostList = styled.ul``;

function Posts({ allPosts }: Props) {
  return (
    <PostList>
      {allPosts.map(
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
