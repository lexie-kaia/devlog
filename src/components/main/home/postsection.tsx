import React, { useState } from 'react';
import styled from '@emotion/styled';
// components
import PostList from './postlist';
import ListStyleSelect from './liststyleselect';

// types
import { PostListStyleType, PostsType } from '../../../types';

type Props = {
  postList: PostsType;
};

const PostSectionContainer = styled.section``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const Body = styled.div``;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

function PostSection({ postList }: Props) {
  const [listStyle, setListStyle] = useState<PostListStyleType>('default');

  return (
    <PostSectionContainer>
      <Header>
        <Title>posts</Title>
        <ListStyleSelect listStyle={listStyle} setListStyle={setListStyle} />
      </Header>
      <Body>
        <PostList postList={postList} listStyle={listStyle} />
      </Body>
    </PostSectionContainer>
  );
}

export default PostSection;
