import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PostItem from './postitem';
import { AllPostsType, QueryStringType } from '../../types';

type Props = {
  postList: AllPostsType;
  queryString: QueryStringType;
};

const Container = styled.ul``;

const NUMBER_OF_ITEMS_PER_PAGE = 10;

function PostList({ postList, queryString }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [queryString]);

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
  }, [page, queryString]);

  return (
    <Container ref={containerRef}>
      {postList.slice(0, page * NUMBER_OF_ITEMS_PER_PAGE).map(
        (
          {
            node: {
              id,
              slug,
              frontmatter: { ...props },
            },
          },
          index
        ) => {
          return <PostItem key={id} slug={slug} {...props} />;
        }
      )}
    </Container>
  );
}

export default PostList;
