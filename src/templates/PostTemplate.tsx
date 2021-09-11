import React from 'react';
import { graphql } from 'gatsby';
// component
import Layout from '../components/layout/LayoutIndex';
import PostMainRenderer from '../components/pages/post/PostIndex';

type Props = {
  data: any;
};

function PostTemplate({ data }: Props) {
  return (
    <Layout
      layoutType={'fullPage'}
      pageTitle={data.post.frontmatter.title}
      pageDescription={data.post.excerpt}
      pagePath={data.post.slug}
    >
      <PostMainRenderer
        post={data.post}
        moreList={data.more.nodes}
        prev={data.prev}
        next={data.next}
      />
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
      excerpt
      slug
      tableOfContents
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
