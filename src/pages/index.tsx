import React, { useState, useEffect, useMemo } from 'react';
import { graphql } from 'gatsby';
import * as queryStringParser from 'query-string';
// components
import HomeRenderer from '../components/pages/home/HomeIndex';
import Layout from '../components/layout/LayoutIndex';
// hooks
import { useQueryString } from '../store/Location';
// types
import { PostType } from '../types';

type Props = {
  data: any;
};

export default function Home({ data }: Props) {
  const { queryString, setQueryString } = useQueryString();

  const postList = useMemo(() => {
    const {
      allMdx: { nodes: allPosts },
    } = data;
    const query = queryStringParser.parse(queryString);
    const queryCategory = query.category ? query.category : '';
    const queryTags = query.tag
      ? typeof query.tag === 'string'
        ? [query.tag]
        : query.tag
      : [];

    return allPosts.filter((post: PostType) => {
      const {
        frontmatter: { category: postCategory, tags: postTags },
      } = post;

      if (queryCategory === '' && queryTags === []) return true;

      if (queryCategory) {
        if (postCategory !== queryCategory) return false;
      }

      if (queryTags.length !== 0) {
        for (let i = 0; i < queryTags.length; i++) {
          if (!postTags.includes(queryTags[i])) {
            return false;
          }
        }
      }

      return true;
    });
  }, [queryString]);

  return (
    <Layout layoutType={'infiniteScroll'} pagePath={'/'}>
      <HomeRenderer postList={postList} />
    </Layout>
  );
}

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
