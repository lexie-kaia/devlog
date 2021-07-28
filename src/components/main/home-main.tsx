import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as queryStringParser from 'query-string';
import Section from './section';
import MenuList from './home-menulist';
import PostSection from './postsection';
import Footer from '../common/footer';
import { QueryStringType, PostType, PostsType } from '../../types';

type Props = {
  allPosts: PostsType;
  queryString: QueryStringType;
};

const Container = styled.div`
  padding: 1.5rem 1rem;
  min-height: calc(100vh - 5rem);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 577px) {
    padding: 1.5rem 2rem;
  }
  @media screen and (min-width: 769px) {
    display: flex;
    padding: 1.5rem 3rem;
  }
  @media screen and (min-width: 961px) {
    padding: 1.5rem 4rem;
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

const LeftContents = styled.div``;

const RightContents = styled.div``;

function Main({ allPosts, queryString }: Props) {
  const { categoryList, tagList } = useMemo(() => {
    const categoryList = new Map();
    categoryList.set('all', 0);
    const tagList = new Map();

    allPosts.forEach((post: PostType) => {
      const {
        node: {
          frontmatter: { category, tags },
        },
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
        node: {
          frontmatter: { category: postCategory, tags: postTags },
        },
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
        <LeftContents>
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
          {/* <Footer /> */}
        </LeftContents>
      </LeftColumn>
      <RightColumn>
        <RightContents>
          <PostSection postList={postList} queryString={queryString} />
        </RightContents>
      </RightColumn>
    </Container>
  );
}

export default Main;
