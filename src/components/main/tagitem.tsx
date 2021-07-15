import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

type Props = {
  tag: string;
};

const Wrapper = styled.li`
  margin: 0 0.5rem 0.5rem 0;
`;

const TagLink = styled(Link)`
  display: block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  color: ${props => props.theme.color.textSub};
  border: ${props => `1px solid ${props.theme.color.line}`};
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    border: ${props => `1px solid ${props.theme.color.highlight}`};
  }
`;

function TagItem({ tag }: Props) {
  return (
    <Wrapper>
      <TagLink to="/">{tag}</TagLink>
    </Wrapper>
  );
}

export default TagItem;
