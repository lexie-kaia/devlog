import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import Section from './section';
import MenuList from './home-menulist';
import { QueryStringType, PostType } from '../../types';
import Footer from '../common/footer';
import PostList from './home-postlist';

type Props = {
  allPosts: any;
  queryString: QueryStringType;
};

const Container = styled.div`
  padding: 1rem;
  min-height: calc(100vh - 5rem);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 577px) {
    padding: 1rem 2rem;
  }
  @media screen and (min-width: 769px) {
    display: flex;
    padding: 1rem 3rem;
  }
  @media screen and (min-width: 961px) {
    padding: 1rem 4rem;
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

const LeftContents = styled.div`
  /* border: 1px solid red; */
`;

const RightContents = styled.div`
  /* max-width: 720px; */
  /* width: 100%; */
  /* border: 1px solid red; */
`;

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
          <Section title="posts">
            <PostList allPosts={allPosts} queryString={queryString} />
          </Section>
        </RightContents>
      </RightColumn>
    </Container>
  );
}

export default Main;
