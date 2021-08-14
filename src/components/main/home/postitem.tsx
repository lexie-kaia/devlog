import React from 'react';
import styled from '@emotion/styled';
// components
import PostItemBlock from './postitem-block';
import PostItemList from './postitem-list';
// types
import { PostListStyleType, PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType & {
  slug: string;
  listStyle: PostListStyleType;
};

const PostItemContainer = styled.li`
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--line);
  }
`;

function PostItem({ listStyle, ...props }: Props) {
  return (
    <PostItemContainer>
      {listStyle === 'default' && <PostItemBlock {...props} />}
      {listStyle === 'compact' && <PostItemList {...props} />}
    </PostItemContainer>
  );
}

export default PostItem;
