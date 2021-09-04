import React from 'react';
import styled from '@emotion/styled';
// components
import MoreSectionRenderer from './MoreSection';
import TagShareRenderer from './TagShare';
import PrevNextRenderer from './PrevNext';
// types
import {
  MorePostType,
  PostFrontMatterType,
  PrevNextPostType,
} from '../../../types';

type Props = {
  postId: string;
  frontmatter: PostFrontMatterType;
  moreList: MorePostType[];
  prev: PrevNextPostType;
  next: PrevNextPostType;
};

export default function PostFooterRenderer({
  postId,
  frontmatter,
  moreList,
  prev,
  next,
}: Props) {
  return (
    <PostFooter>
      {moreList &&
        moreList.length !== 0 &&
        !(moreList.length === 1 && moreList[0].id === postId) && (
          <MoreSectionRenderer
            postCategory={frontmatter.category}
            postId={postId}
            moreList={moreList}
          />
        )}
      <TagShareRenderer tags={frontmatter.tags} />
      <PrevNextRenderer next={next} prev={prev} />
    </PostFooter>
  );
}

const PostFooter = styled.div``;
