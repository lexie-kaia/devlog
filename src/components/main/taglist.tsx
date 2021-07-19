import React from 'react';
import styled from '@emotion/styled';
import TagItem from './tagitem';

type Props = {
  currentTag: string;
  allTags: TagType;
};

export type TagType = {
  all: number;
  [k: string]: number;
};

const Wrapper = styled.ul`
  padding: 1.5rem 0;
`;

function TagList({ currentTag, allTags }: Props) {
  return (
    <Wrapper>
      {allTags &&
        Object.keys(allTags).map(tag => (
          <TagItem
            key={tag}
            tag={tag}
            count={allTags[tag]}
            currentTag={currentTag}
          />
        ))}
    </Wrapper>
  );
}

export default TagList;
