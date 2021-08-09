import React, { useState } from 'react';
import styled from '@emotion/styled';
// components
import PostList from './postlist';
import IconBlock from '../../../assets/icons/icon-block';
import IconList from '../../../assets/icons/icon-list';
// types
import { PostListStyleType, PostsType, QueryStringType } from '../../../types';

type Props = {
  postList: PostsType;
  queryString: QueryStringType;
};

const Container = styled.section``;

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

const PostListStyleButtons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 2px var(--shadow);
`;

const PostListStyleButton = styled.button<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border: 1px solid var(--line);

  svg {
    width: 16px;
    height: 16px;
    fill: ${props =>
      props.isClicked ? `var(--highlight)` : `var(--text-second)`};
    stroke: ${props =>
      props.isClicked ? `var(--highlight)` : `var(--text-second)`};
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid var(--highlight);
    svg {
      fill: var(--highlight);
      stroke: var(--highlight);
    }
  }
`;

const BlockButton = styled(PostListStyleButton)<{ isClicked: boolean }>`
  border-radius: 0.25rem 0 0 0.25rem;
  svg {
    stroke-width: 1px;
  }
`;

const ListButton = styled(PostListStyleButton)<{ isClicked: boolean }>`
  border-radius: 0 0.25rem 0.25rem 0;
  border-left: 1px solid var(--back-main);
  svg {
    stroke-width: 2px;
  }
`;

function PostSection({ postList, queryString }: Props) {
  const [postListStyle, setPostListStyle] =
    useState<PostListStyleType>('block');

  const BlockButtonOnclick = () => {
    setPostListStyle('block');
  };

  const ListButtonOnclick = () => {
    setPostListStyle('list');
  };

  return (
    <Container>
      <Header>
        <Title>posts</Title>
        <PostListStyleButtons>
          <BlockButton
            onClick={BlockButtonOnclick}
            isClicked={postListStyle === 'block'}
          >
            <IconBlock />
          </BlockButton>
          <ListButton
            onClick={ListButtonOnclick}
            isClicked={postListStyle === 'list'}
          >
            <IconList />
          </ListButton>
        </PostListStyleButtons>
      </Header>
      <Body>
        <PostList
          postList={postList}
          queryString={queryString}
          postListStyle={postListStyle}
        />
      </Body>
    </Container>
  );
}

export default PostSection;
