import React from 'react';
import styled from '@emotion/styled';
// components
import PostSectionRenderer from './PostSection';
import PageMargin from '../../common/PageMargin';
// types
import { PostsType } from '../../../types';

type Props = {
  postList: PostsType;
};

export default function HomeRenderer({ postList }: Props) {
  return (
    <PageContainer>
      <PageMargin>
        <PageContent>
          <PostSectionRenderer postList={postList} />
        </PageContent>
      </PageMargin>
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const PageContent = styled.div`
  padding: 1.5rem 0;
`;
