import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  div[class='utterances'] {
    max-width: 100% !important;
  }
`;

function Comments({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Comments;
