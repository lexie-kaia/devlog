import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import Hero from '../components/main/hero';
import { H2 } from '../styles/typo';

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
  text-transform: uppercase;
`;

function Home() {
  return (
    <Layout>
      <Hero />
      <Main>
        <Post>
          <SectionTitle size="small">Posts</SectionTitle>
        </Post>
        <Category>
          <SectionTitle size="small">Categories</SectionTitle>
        </Category>
      </Main>
    </Layout>
  );
}

export default Home;
