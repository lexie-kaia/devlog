import React from 'react';
import styled from '@emotion/styled';
// components
import Share from '../../common/share';
import Tag from '../../common/tag';

type Props = {
  tags: string[];
};

const Container = styled.div`
  padding: 1.5rem 0 0.75rem;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};

  @media screen and (min-width: 577px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Column = styled.div`
  &:first-of-type {
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 577px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;

function TagShare({ tags }: Props) {
  return (
    <Container>
      <Column>
        <Tag tags={tags} />
      </Column>
      <Column>
        <Share />
      </Column>
    </Container>
  );
}

export default TagShare;
