import React from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostType } from './postitem';

type Props = {
  posts: PostQlDataType[];
};

type PostQlDataType = {
  node: {
    frontmatter: PostType;
    id: string;
  };
};

const PostList = styled.ul``;

function Posts({ posts }: Props) {
  return (
    <PostList>
      {posts.map(
        ({
          node: {
            frontmatter: { ...rest },
            id: id,
          },
        }) => (
          <PostItem key={id} {...rest} />
        )
      )}
    </PostList>
  );
}

export default Posts;
