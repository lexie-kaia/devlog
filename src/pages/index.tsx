import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/layout';
import Header from '../components/common/header';
import Hero from '../components/main/hero';
import Main from '../components/main/home-main';

type Props = {
  location: {
    search: string;
  };
  data: any;
};

function Home({ data, location }: Props) {
  return (
    <Layout>
      <Header />
      {/* <Hero /> */}

      <Main allPosts={data.allMdx.edges} queryString={location.search} />
    </Layout>
  );
}

export default Home;

export const pageQuery = graphql`
  query QueryPosts {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            category
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  breakpoints: [576, 768]
                  aspectRatio: 2.5
                )
              }
            }
          }
        }
      }
    }
  }
`;
