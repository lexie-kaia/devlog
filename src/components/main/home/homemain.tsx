import React from 'react';
import styled from '@emotion/styled';
// components
import PostSection from './postsection';
import PageMargin from '../../common/page-margin';
// types
import { PostsType } from '../../../types';

type Props = {
  postList: PostsType;
};

const PageContainer = styled.div``;

const PageContent = styled.div`
  padding: 1.5rem 0;
`;

function HomeMain({ postList }: Props) {
  return (
    <PageContainer>
      <PageMargin>
        <PageContent>
          <PostSection postList={postList} />
        </PageContent>
      </PageMargin>
    </PageContainer>
  );
}

export default HomeMain;
