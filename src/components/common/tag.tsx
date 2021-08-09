import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
  tags: string[];
};

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--text-second);
`;

const TagItem = styled.li`
  margin-right: 0.25rem;

  a {
    &:before {
      content: '#';
    }

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
      color: var(--highlight);
    }
  }
`;

function Tag({ tags }: Props) {
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

export default Tag;
