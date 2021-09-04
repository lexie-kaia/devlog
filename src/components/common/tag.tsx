import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
  tags: string[];
};

export default function TagRenderer({ tags }: Props) {
  return (
    <>
      {tags && tags.length > 0 && (
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag}>
              <Link to={`/?tag=${tag}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagList>
      )}
    </>
  );
}

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: var(--text-second);
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
`;

const TagItem = styled.li`
  margin-right: 0.25rem;

  a {
    &:before {
      content: '#';
    }

    &:hover,
    &:focus,
    &:acitve {
      outline: none;
      text-decoration: underline;
      color: var(--highlight);
    }
  }
`;
