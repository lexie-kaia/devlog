import React, { useState } from 'react';
import styled from '@emotion/styled';
// components
import PostListRenderer from './PostList';
import ListStyleSelectRenderer from './ListStyleSelect';
// types
import { PostListStyleType, PostsType } from '../../../types';
import { useEffect } from 'react';
import { keyframes } from '@emotion/react';

type Props = {
  postList: PostsType;
};

export default function PostSectionRenderer({ postList }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [listStyle, setListStyle] = useState<PostListStyleType>('default');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const userPreference = window.localStorage.getItem(
      'listStyle'
    ) as null | PostListStyleType;
    if (userPreference == null) return;
    setListStyle(userPreference);
  }, []);

  const changeListStyle = (listStyle: PostListStyleType) => {
    setListStyle(listStyle);
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('listStyle', listStyle);
    }
  };

  return (
    <>
      {!isLoaded && (
        <LoadingSection>
          <LoadingSpinner />
        </LoadingSection>
      )}
      {isLoaded && (
        <PostSection>
          <Header>
            <Title>posts</Title>
            <ListStyleSelectRenderer
              listStyle={listStyle}
              changeListStyle={changeListStyle}
            />
          </Header>
          <Body>
            <PostListRenderer postList={postList} listStyle={listStyle} />
          </Body>
        </PostSection>
      )}
    </>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 13rem);
  min-height: 0;
`;

const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: 3px solid var(--line);
  border-bottom: 3px solid var(--highlight);
  animation: ${rotate} 500ms linear infinite;
`;

const PostSection = styled.section``;

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
