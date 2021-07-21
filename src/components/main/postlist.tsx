import React from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { PostType } from './postitem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
// import { useMemo } from 'react';

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

const Wrapper = styled.ul``;

function PostList({ allPosts, currentTag }: Props) {
  const { containerRef, postList } = useInfiniteScroll(currentTag, allPosts);

  return (
    <Wrapper ref={containerRef}>
      {postList.map(
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
    </Wrapper>
  );
}

export default PostList;
