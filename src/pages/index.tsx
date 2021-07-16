import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import Section from '../components/main/section';
import PostItem from '../components/main/postitem';
import CategoryItem from '../components/main/categoryitem';
import TagItem from '../components/main/tagitem';

const posts = [
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js', 'react', 'gatsby'],
    id: 1,
    date: '2020.20.20',
    summary:
      '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby', 'react', 'gatsby', 'react'],
    id: 2,
    date: '2020.20.20',
    summary: '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
    summary:
      '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은 어떨지 한글테스트',
  },
  {
    title: '개츠비 블로그 만들기',
    tags: ['react', 'gatsby'],
    id: 2,
    date: '2020.20.20',
    summary: '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은',
  },
  {
    title: '포스트 테스트입니다',
    tags: ['html', 'css', 'js'],
    id: 1,
    date: '2020.20.20',
    summary: '한글테스트 과연 한글은 어떨지 한글테스트 과연 한글은',
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

type Props = {
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

const PostList = styled.ul``;

const CategoryList = styled.ul``;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: -0.5rem;
`;

function Home({ data }: Props) {
  console.log(data);
  return (
    <Layout>
      <Hero />
      <Main>
        <Left>
          <Section title="posts">
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
          <Section title="categories">
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
          <Section title="tags">
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

export const queryIndex = graphql`
  query queryIndex {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          summary
          thumbnail {
            publicURL
          }
          title
          tags
        }
        id
      }
    }
  }
`;
