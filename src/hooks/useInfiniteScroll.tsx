import { useEffect } from 'react';
import { useRef, useState, useMemo } from 'react';
import { PostQlDataType } from '../components/main/postlist';

const NUMBER_OF_ITEMS_PER_SCROLL = 5;

function useInfiniteScroll(currentTag: string, allPosts: PostQlDataType[]) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [count, setCount] = useState<number>(1);

  const postsByTag = useMemo(() => {
    return allPosts.filter((post: PostQlDataType) => {
      const {
        node: {
          frontmatter: { tags },
        },
      } = post;

      return currentTag !== 'all' ? tags.includes(currentTag) : true;
    });
  }, [currentTag]);

  const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    console.log(observer);
    if (!entries[0].isIntersecting) return;

    setCount(value => value + 1);
    observer.disconnect();
  });

  useEffect(() => setCount(1), [currentTag]);

  useEffect(() => {
    if (
      containerRef.current == null ||
      containerRef.current.children.length === 0 ||
      NUMBER_OF_ITEMS_PER_SCROLL * count > postsByTag.length
    ) {
      return;
    }

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );
  }, [count, currentTag]);

  return {
    containerRef,
    postList: postsByTag.slice(0, count * NUMBER_OF_ITEMS_PER_SCROLL),
  };
}

export default useInfiniteScroll;
