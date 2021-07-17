import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

type Props = {
  tag: string;
  count: number;
  currentTag: string;
};

const Wrapper = styled.li<{ isCurrentTag: boolean }>`
  margin-bottom: 0.75rem;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;

  a {
    &:before {
      content: '#';
    }

    color: ${props =>
      props.isCurrentTag
        ? props.theme.color.highlight
        : props.theme.color.textSub};

    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.highlight};
      text-decoration: underline;
    }
  }
`;

function TagItem({ tag, count, currentTag }: Props) {
  return (
    <Wrapper isCurrentTag={tag === currentTag}>
      <Link to={tag === 'all' ? '/' : `/?tag=${tag}`}>
        {tag} ({count})
      </Link>
    </Wrapper>
  );
}

export default TagItem;
