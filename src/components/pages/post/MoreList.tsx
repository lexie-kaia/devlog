import React from 'react';
import styled from '@emotion/styled';
// components
import MoreItemRenderer from './MoreItem';
// types
import { MorePostType } from '../../../types';

type Props = {
  moreList: MorePostType[];
  postId: string;
};

export default function MoreListRenderer({ moreList, postId }: Props) {
  return (
    <MoreList>
      {moreList.map(moreItem => (
        <MoreItemRenderer
          key={moreItem.id}
          {...moreItem.frontmatter}
          slug={moreItem.slug}
          isCurrentPost={moreItem.id === postId}
        />
      ))}
    </MoreList>
  );
}

export const MoreList = styled.ul``;
