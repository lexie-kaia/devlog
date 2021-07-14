import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import PostItem from '../components/main/postitem';
import CategoryItem from '../components/main/categoryitem';

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

const Main = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Post = styled.section`
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex: 2;
  }
`;

const Category = styled.section`
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const SectionTitle = styled.h2`
  margin: 0.5rem 0 1rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

const PostList = styled.ul``;

const CategoryList = styled.ul``;

function Home() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Post>
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
        </Post>
        <Category>
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
        </Category>
      </Main>
    </Layout>
  );
}

export default Home;
