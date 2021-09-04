import React from 'react';
import styled from '@emotion/styled';
// components
import ShareRenderer from '../../common/Share';
import TagRenderer from '../../common/Tag';

type Props = {
  tags: string[];
};

export default function TagShareRenderer({ tags }: Props) {
  return (
    <TagShare>
      <Wrapper>
        <TagRenderer tags={tags} />
      </Wrapper>
      <Wrapper>
        <ShareRenderer />
      </Wrapper>
    </TagShare>
  );
}

const TagShare = styled.div`
  padding: 1.5rem 0 0.75rem;
  border-bottom: 1px solid var(--line);

  @media screen and (min-width: 577px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  &:first-of-type {
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 577px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;
