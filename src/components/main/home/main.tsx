import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as queryStringParser from 'query-string';
// components
import Section from '../../common/section';
import MenuList from './menulist';
import PostSection from './postsection';
import ContentsArea from '../../layout/contentsarea';
// types
import { QueryStringType, PostType, PostsType } from '../../../types';

type Props = {
  allPosts: PostsType;
  queryString: QueryStringType;
};

const Container = styled(ContentsArea)`
  margin: 1.5rem auto;
  max-width: 1440px;
  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

const LeftColumn = styled.div`
  @media screen and (min-width: 769px) {
    flex: 1;
    margin-right: 3rem;
  }
`;

const RightColumn = styled.div`
  @media screen and (min-width: 769px) {
    flex: 2.5;
  }
`;

function Main({ allPosts, queryString }: Props) {
  const { categoryList, tagList } = useMemo(() => {
    const categoryList = new Map();
    categoryList.set('all', 0);
    const tagList = new Map();

    allPosts.forEach((post: PostType) => {
      const {
        frontmatter: { category, tags },
      } = post;

      if (!categoryList.has(category)) {
        categoryList.set(category, 1);
      } else {
        categoryList.set(category, categoryList.get(category) + 1);
      }

      categoryList.set('all', categoryList.get('all') + 1);

      tags.forEach(tag => {
        if (!tagList.has(tag)) {
          tagList.set(tag, 1);
        } else {
          tagList.set(tag, tagList.get(tag) + 1);
        }
      });
    });

    return { categoryList, tagList };
  }, []);

  const postList = useMemo(() => {
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
    <Container>
      <LeftColumn>
        <Section title="categories" isAccordion={true}>
          <MenuList
            menuType="category"
            menuList={categoryList}
            queryString={queryString}
          />
        </Section>
        <Section title="tags" isAccordion={true}>
          <MenuList
            menuType="tag"
            menuList={tagList}
            queryString={queryString}
          />
        </Section>
      </LeftColumn>
      <RightColumn>
        <PostSection postList={postList} queryString={queryString} />
      </RightColumn>
    </Container>
  );
}

export default Main;
