import React from 'react';
import styled from '@emotion/styled';
import MoreItem from './moreitem';
import { MorePostType } from '../../../types';

type Props = {
  moreList: MorePostType[];
  postId: string;
};

const Container = styled.ul``;

function MoreList({ moreList, postId }: Props) {
  return (
    <Container>
      {moreList.map(moreItem => (
        <MoreItem
          key={moreItem.id}
          {...moreItem.frontmatter}
          slug={moreItem.slug}
          isCurrentPost={moreItem.id === postId}
        />
      ))}
    </Container>
  );
}

export default MoreList;
