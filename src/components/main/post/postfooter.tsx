import React from 'react';
import styled from '@emotion/styled';
import MoreSection from './moresection';
import TagShare from './tagshare';
import PrevNext from './prevnext';
import {
  MorePostType,
  PostFrontMatterType,
  PrevNextPostType,
} from '../../../types';

type Props = {
  prev: PrevNextPostType;
  next: PrevNextPostType;
  postId: string;
  frontmatter: PostFrontMatterType;
  moreList: MorePostType[];
};

const Container = styled.div``;

function PostFooter({ postId, frontmatter, moreList, prev, next }: Props) {
  return (
    <Container>
      {moreList &&
        moreList.length !== 0 &&
        !(moreList.length === 1 && moreList[0].id === postId) && (
          <MoreSection
            postCategory={frontmatter.category}
            postId={postId}
            moreList={moreList}
          />
        )}

      <TagShare tags={frontmatter.tags} />
      <PrevNext next={next} prev={prev} />
    </Container>
  );
}

export default PostFooter;
