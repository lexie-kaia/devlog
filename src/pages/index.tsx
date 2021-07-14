import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import { H2 } from '../styles/typo';
import PostItem from '../components/main/postitem';
import CategoryItem from '../components/main/categoryitem';

const posts = [
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby'],
    id: 2,
    date: '2020.20.20',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby'],
    id: 2,
    date: '2020.20.20',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby'],
    id: 2,
    date: '2020.20.20',
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

const Main = styled.main`
  display: flex;
`;

const Post = styled.section`
  flex: 2;
  padding: 1rem;
`;

const Category = styled.section`
  flex: 1;
  padding: 1rem;
`;

const SectionTitle = styled(H2)`
  margin: 0.5rem 0 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const PostList = styled.ul``;

const CategoryList = styled.ul``;

function Home() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Post>
          <SectionTitle size="small">Posts</SectionTitle>
          <PostList>
            {posts.map(post => (
              <PostItem
                key={post.id}
                title={post.title}
                tags={post.tags}
                date={post.date}
              />
            ))}
          </PostList>
        </Post>
        <Category>
          <SectionTitle size="small">Categories</SectionTitle>
          <CategoryList>
            {categories.map(category => (
              <CategoryItem
                key={category.heading}
                heading={category.heading}
                posts={category.posts}
              />
            ))}
          </CategoryList>
        </Category>
      </Main>
    </Layout>
  );
}

export default Home;
