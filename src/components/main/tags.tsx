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

const TagList = styled.ul`
  padding: 1.5rem 0;
`;

function Tags({ currentTag, allTags }: Props) {
  return (
    <TagList>
      {allTags &&
        Object.keys(allTags).map(tag => (
          <TagItem
            key={tag}
            tag={tag}
            count={allTags[tag]}
            currentTag={currentTag}
          />
        ))}
    </TagList>
  );
}

export default Tags;
