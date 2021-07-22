import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import { Link } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const Title = styled.p`
  margin-bottom: 1rem;
  font-size: 64px;
  font-weight: 700;
  color: ${props => props.theme.color.textSub};

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
    color: ${props => props.theme.color.highlight};
  }
`;

function NotFound() {
  return (
    <Layout>
      <Container>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <HomeLink to="/">Home</HomeLink>
      </Container>
    </Layout>
  );
}

export default NotFound;
