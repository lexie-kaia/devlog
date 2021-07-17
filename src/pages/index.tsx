import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import queryString from 'query-string';

import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import Section from '../components/main/section';
import Posts, { PostQlDataType } from '../components/main/posts';
import Tags, { TagType } from '../components/main/tags';

type Props = {
  location: {
    path: string;
    search: string;
  };
  data: any;
};

const Main = styled.main`
  @media screen and (min-width: 961px) {
    display: flex;
  }
`;

const Left = styled.div`
  @media screen and (min-width: 961px) {
    flex: 2;
  }
`;

const Right = styled.div`
  @media screen and (min-width: 961px) {
    flex: 1;
  }
`;

function Home({ data, location }: Props) {
  const {
    allMdx: { edges: allPosts },
  } = data;

  const query = queryString.parse(location.search);
  const currentTag =
    query.tag && typeof query.tag === 'string' ? query.tag : 'all';

  const allTags = useMemo(() => {
    return allPosts.reduce(
      (allTags: TagType, post: PostQlDataType) => {
        const {
          node: {
            frontmatter: { tags },
          },
        } = post;

        tags.forEach(tag => {
          if (allTags[tag] == null) {
            allTags[tag] = 1;
          } else {
            allTags[tag]++;
          }
        });

        allTags['all']++;

        return allTags;
      },
      { all: 0 }
    );
  }, []);

  return (
    <Layout>
      <Hero />
      <Main>
        <Left>
          <Section title="posts">
            <Posts allPosts={allPosts}></Posts>
          </Section>
        </Left>
        <Right>
          <Section title="tags">
            <Tags allTags={allTags} currentTag={currentTag}></Tags>
          </Section>
        </Right>
      </Main>
    </Layout>
  );
}

export default Home;

export const queryIndex = graphql`
  query queryIndex {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            summary
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
