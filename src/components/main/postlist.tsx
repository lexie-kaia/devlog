import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { PostListStyleType, PostsType, QueryStringType } from '../../types';

type Props = {
  postList: PostsType;
  queryString: QueryStringType;
  postListStyle: PostListStyleType;
};

const Container = styled.ul``;

const NUMBER_OF_ITEMS_PER_PAGE = 10;

function PostList({ postList, queryString, postListStyle }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [queryString, postListStyle]);

  useEffect(() => {
    if (
      containerRef.current == null ||
      containerRef.current.children.length === 0 ||
      NUMBER_OF_ITEMS_PER_PAGE * page > postList.length
    )
      return;

    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;
      setPage(value => value + 1);
    });

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );

    return () => {
      observer.disconnect();
    };
  }, [page, queryString, postListStyle]);

  return (
    <Container ref={containerRef}>
      {postList.slice(0, page * NUMBER_OF_ITEMS_PER_PAGE).map(
        ({
          node: {
            id,
            slug,
            frontmatter: { ...props },
          },
        }) => {
          return (
            <PostItem
              key={id}
              slug={slug}
              {...props}
              postListStyle={postListStyle}
            />
          );
        }
      )}
    </Container>
  );
}

export default PostList;
