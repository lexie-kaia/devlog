import React from 'react';
import styled from '@emotion/styled';
// components
import PageMargin from '../../common/PageMargin';
import PostHeader from './PostHeader';
import PostBodyRenderer from './PostBody';
import PostFooterRenderer from './PostFooter';
import SectionRenderer from '../../common/Section';
import CommentWidgetRenderer from '../../../services/CommentWidget';
import TocSectionRenderer from './TocSection';
// types
import {
  DetailPostType,
  MorePostsType,
  PrevNextPostType,
} from '../../../types';

type Props = {
  post: DetailPostType;
  moreList: MorePostsType;
  prev: PrevNextPostType;
  next: PrevNextPostType;
};

export default function PostMainRenderer({
  post,
  moreList,
  prev,
  next,
}: Props) {
  return (
    <PageContainer>
      <PageContent>
        <Spacing />
        <PostContainer>
          <PageMargin>
            <PostHeader {...post.frontmatter} />
            <PostBodyRenderer mdxBody={post.body} />

            <PostFooterRenderer
              postId={post.id}
              frontmatter={post.frontmatter}
              moreList={moreList}
              prev={prev}
              next={next}
            />
            <SectionRenderer title="comments" isAccordion={true}>
              <CommentWidgetRenderer />
            </SectionRenderer>
          </PageMargin>
        </PostContainer>
        <TocContainer>
          <TocSectionRenderer
            toc={post.tableOfContents}
            title={post.frontmatter.title}
          />
        </TocContainer>
      </PageContent>
    </PageContainer>
  );
}

const PageContainer = styled.div``;

const PageContent = styled.div`
  @media screen and (min-width: 1201px) {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 1080px) minmax(20rem, 1fr);
  }
`;

const Spacing = styled.div`
  display: none;
  @media screen and (min-width: 1201px) {
    display: block;
  }
`;

const PostContainer = styled.div`
  margin: 1.5rem auto 3rem;
  min-width: 0;
  width: 100%;
`;

const TocContainer = styled.div`
  position: relative;
  display: none;
  @media screen and (min-width: 1201px) {
    display: block;
    margin: 1.5rem 4rem 1.5rem 0;
  }
`;
