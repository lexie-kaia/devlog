import React from 'react';
import styled from '@emotion/styled';
// components
import PostItemDefault from './PostItemDefault';
import PostItemList from './PostItemCompact';
// types
import { PostListStyleType, PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType & {
  slug: string;
  listStyle: PostListStyleType;
};

export default function PostItemRenderer({ listStyle, ...props }: Props) {
  return (
    <PostItem>
      {listStyle === 'default' && <PostItemDefault {...props} />}
      {listStyle === 'compact' && <PostItemList {...props} />}
    </PostItem>
  );
}

const PostItem = styled.li`
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--line);
  }
`;
