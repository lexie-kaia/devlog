import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import { H2 } from '../styles/typo';
import PostItem from '../components/main/postitem';

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
        </Category>
      </Main>
    </Layout>
  );
}

export default Home;
