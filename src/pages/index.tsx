import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import PostItem from '../components/main/postitem';
import CategoryItem from '../components/main/categoryitem';
import TagItem from '../components/main/tagitem';

const posts = [
  {
    title: '포스트 테스트입니다',
    tags: [
      'html',
      'css',
      'js',
      'react',
      'gatsby',
      'react',
      'gatsby',
      'react',
      'gatsby',
    ],
    id: 1,
    date: '2020.20.20',
    summary:
      '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: [
      'react',
      'gatsby',
      'react',
      'gatsby',
      'react',
      'gatsby',
      'react',
      'gatsby',
    ],
    id: 2,
    date: '2020.20.20',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mauris arcu. Mauris interdum viverra cursus. Aliquam congue molestie blandit.',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mauris arcu. Mauris interdum viverra cursus. Aliquam congue molestie blandit.',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby'],
    id: 2,
    date: '2020.20.20',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mauris arcu. Mauris interdum viverra cursus. Aliquam congue molestie blandit.',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mauris arcu. Mauris interdum viverra cursus. Aliquam congue molestie blandit.',
  },
];

const categories = [
  {
    heading: 'JavaScript',
    posts: [
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '바닐라 자바스크립트', link: '/' },
    ],
  },
  {
    heading: 'TypeScript',
    posts: [
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '타입스크립트와 리액트', link: '/' },
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '타입스크립트와 리액트', link: '/' },
    ],
  },
  {
    heading: 'TypeScript',
    posts: [
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '타입스크립트와 리액트', link: '/' },
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '타입스크립트와 리액트', link: '/' },
    ],
  },
  {
    heading: 'TypeScript',
    posts: [
      { title: '카테고리 테스트입니다', link: '/' },
      { title: '타입스크립트와 리액트', link: '/' },
    ],
  },
];

const tags = [
  'react',
  'gatsby',
  'nextjs',
  'js',
  'html',
  'css',
  'sass',
  'gatsby',
];

const Main = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Left = styled.div`
  @media screen and (min-width: 768px) {
    flex: 2;
  }
`;

const Right = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const Section = styled.section`
  padding: 1rem;
  /* border: 1px solid red; */
`;

const SectionTitle = styled.h2`
  padding: 1rem 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
`;

const PostList = styled.ul``;

const CategoryList = styled.ul``;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: -0.5rem;
`;

function Home() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Left>
          <Section>
            <SectionTitle>Posts</SectionTitle>
            <PostList>
              {posts.map(post => (
                <PostItem
                  key={post.id}
                  title={post.title}
                  summary={post.summary}
                  tags={post.tags}
                  date={post.date}
                />
              ))}
            </PostList>
          </Section>
        </Left>
        <Right>
          <Section>
            <SectionTitle>Categories</SectionTitle>
            <CategoryList>
              {categories.map(category => (
                <CategoryItem
                  key={category.heading}
                  heading={category.heading}
                  posts={category.posts}
                />
              ))}
            </CategoryList>
          </Section>
          <Section>
            <SectionTitle>Tags</SectionTitle>
            <TagList>
              {tags.map(tag => (
                <TagItem key={tag} tag={tag} />
              ))}
            </TagList>
          </Section>
        </Right>
      </Main>
    </Layout>
  );
}

export default Home;
