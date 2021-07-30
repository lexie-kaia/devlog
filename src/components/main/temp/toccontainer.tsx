import React from 'react';
import styled from '@emotion/styled';
import { TocType } from '../../../types';
import TocContents from './toccontents';

type Props = {
  toc: TocType;
};

const Container = styled.section`
  padding: 1.5rem 0;
  /* max-width: 180px; */
`;

const Header = styled.div``;

const Body = styled.div`
  padding: 1.5rem 0;
  margin-left: -1rem;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

function TocContainer({ toc }: Props) {
  return (
    <Container>
      <Header>
        <Title>table of contents</Title>
      </Header>
      <Body>
        <TocContents toc={toc} />
      </Body>
    </Container>
  );
}

export default TocContainer;
