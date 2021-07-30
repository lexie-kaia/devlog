import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
// component
import Layout from '../components/layout/layout';
import ContentsArea from '../components/layout/contentsarea';
import PostHeader from '../components/main/post/postheader';
import PostBody from '../components/main/post/postbody';
import PostFooter from '../components/main/post/postfooter';
import Section from '../components/common/section';
import Commentwidget from '../services/comments_widget';

type Props = {
  data: any;
};

const Container = styled(ContentsArea)`
  max-width: 1080px;
  margin: 1.5rem auto 3rem;
`;

function PostTemplate({ data }: Props) {
  return (
    <Layout layoutType={'fullPage'}>
      <Container>
        <PostHeader {...data.post.frontmatter} />
        <PostBody mdxBody={data.post.body} />
        <PostFooter
          postId={data.post.id}
          frontmatter={data.post.frontmatter}
          moreList={data.more.nodes}
          prev={data.prev}
          next={data.next}
        />
        <Section title="comments" isAccordion={true}>
          <Commentwidget />
        </Section>
      </Container>
    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query QueryPost(
    $id: String!
    $category: String!
    $prevId: String
    $nextId: String
  ) {
    post: mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        category
        tags
      }
    }
    next: mdx(id: { eq: $nextId }) {
      slug
      frontmatter {
        title
      }
    }
    prev: mdx(id: { eq: $prevId }) {
      slug
      frontmatter {
        title
      }
    }
    more: allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          tags
          title
        }
      }
    }
  }
`;
