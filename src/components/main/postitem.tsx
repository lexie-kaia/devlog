import React from 'react';
import PostItemBlock from './postitem-block';
import PostItemList from './postitem-list';
import { PostListStyleType, PostFrontMatterType } from '../../types';

type Props = PostFrontMatterType & {
  slug: string;
  postListStyle: PostListStyleType;
};

function PostItem({ postListStyle, ...props }: Props) {
  return (
    <>
      {postListStyle === 'block' && <PostItemBlock {...props} />}
      {postListStyle === 'list' && <PostItemList {...props} />}
    </>
  );
}

export default PostItem;
