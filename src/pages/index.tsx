import React from 'react';
import { graphql } from 'gatsby';
// components
import Layout from '../components/layout/layout';
import Main from '../components/main/home/main';

type Props = {
  location: {
    search: string;
  };
  data: any;
};

function Home({ data, location }: Props) {
  return (
    <Layout layoutType={'list'}>
      <Main allPosts={data.allMdx.nodes} queryString={location.search} />
    </Layout>
  );
}

export default Home;

export const pageQuery = graphql`
  query QueryPosts {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          category
          tags
        }
      }
    }
  }
`;
