import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import queryString from 'query-string';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import Section from '../components/main/section';
import PostList, { PostQlDataType } from '../components/main/postlist';
import TagList, { TagType } from '../components/main/taglist';

type Props = {
  location: {
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
            <PostList allPosts={allPosts} currentTag={currentTag}></PostList>
          </Section>
        </Left>
        <Right>
          <Section title="tags">
            <TagList allTags={allTags} currentTag={currentTag}></TagList>
          </Section>
        </Right>
      </Main>
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
            date(formatString: "YYYY.MM.DD")
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
