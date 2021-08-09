import React from 'react';
import styled from '@emotion/styled';
// components
import PostItemBlock from './postitem-block';
import PostItemList from './postitem-list';
// types
import { PostListStyleType, PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType & {
  slug: string;
  postListStyle: PostListStyleType;
};

const Container = styled.li`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--line);
`;

function PostItem({ postListStyle, ...props }: Props) {
  return (
    <Container>
      {postListStyle === 'block' && <PostItemBlock {...props} />}
      {postListStyle === 'list' && <PostItemList {...props} />}
    </Container>
  );
}

export default PostItem;
