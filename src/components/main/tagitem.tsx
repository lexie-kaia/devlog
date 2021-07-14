import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

type Props = {
  tag: string;
};

const Wrapper = styled.li`
  margin: 0 0.5rem 0.5rem 0;
`;

const Tag = styled.span`
  display: block;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  color: ${props => props.theme.color.textSub};
  border: ${props => `1px solid ${props.theme.color.line}`};
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

function TagItem({ tag }: Props) {
  return (
    <Wrapper>
      <Link to="/">
        <Tag>{tag}</Tag>
      </Link>
    </Wrapper>
  );
}

export default TagItem;
