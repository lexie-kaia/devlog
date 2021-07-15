import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  title: string;
};

const Container = styled.section`
  padding: 1rem;
`;

const Title = styled.h2`
  padding: 1rem 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
`;

function Section({ children, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;
