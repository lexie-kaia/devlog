import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
// components
import Layout from '../components/layout/layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
  padding: 0 1rem;
`;

const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 64px;
  font-weight: 700;
  color: var(--text-second);

  @media screen and (min-width: 769px) {
    font-size: 120px;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`;

const HomeLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;

  &:hover {
    color: var(--highlight);
  }
`;

function NotFound() {
  return (
    <Layout layoutType={'fullPage'}>
      <Container>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <HomeLink to="/">Home</HomeLink>
      </Container>
    </Layout>
  );
}

export default NotFound;
