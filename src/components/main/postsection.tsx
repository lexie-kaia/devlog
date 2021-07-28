import React, { useState } from 'react';
import styled from '@emotion/styled';
import PostList from './postlist';
import IconBlock from '../../assets/icons/icon-block';
import IconList from '../../assets/icons/icon-list';
import { PostListStyleType, PostsType, QueryStringType } from '../../types';

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
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

const PostListStyleButtons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: ${props => `0 0 4px ${props.theme.color.shadow}`};
`;

const PostListStyleButton = styled.button<{ isClicked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;

  svg {
    width: 16px;
    height: 16px;
    fill: ${props =>
      props.isClicked
        ? props.theme.color.highlight
        : props.theme.color.textSub};
    stroke: ${props =>
      props.isClicked
        ? props.theme.color.highlight
        : props.theme.color.textSub};
  }

  &:hover,
  &:focus {
    outline: none;
    border: ${props => `1px solid ${props.theme.color.highlight}`};

    svg {
      fill: ${props => props.theme.color.highlight};
      stroke: ${props => props.theme.color.highlight};
    }
  }
`;

const BlockButton = styled(PostListStyleButton)<{ isClicked: boolean }>`
  border-radius: 0.25rem 0 0 0.25rem;
  border: ${props => `1px solid ${props.theme.color.line}`};
  svg {
    stroke-width: 1px;
  }
`;

const ListButton = styled(PostListStyleButton)<{ isClicked: boolean }>`
  border-radius: 0 0.25rem 0.25rem 0;
  border: ${props => `1px solid ${props.theme.color.line}`};
  border-left: ${props => `1px solid ${props.theme.color.backMain}`};
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
