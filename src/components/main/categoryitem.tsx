import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type Props = {
  heading: string;
  posts: { title: string; link: string }[];
};

const Wrapper = styled.li`
  padding: 1rem 0;
  border-top: ${props => `1px solid ${props.theme.color.line}`};

  &:last-child {
    border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
`;

const More = styled.button<{ isClicked: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  /* border: 1px solid red; */
  border-radius: 14px;
  color: ${props => props.theme.color.textSecond};
  font-size: 14px;
  line-height: 14px;
  transform: ${props => (props.isClicked ? 'rotate(135deg)' : 'rotate(0)')};

  @media screen and (min-width: ${props => props.theme.breakpoint.tablet}) {
    transition: transform 200ms ease-in-out;
  }
`;

const Line1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: ${props => props.theme.color.textSecond};
  width: 12px;
  height: 1px;
  transform: translate(-50%, 50%);
`;

const Line2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: ${props => props.theme.color.textSecond};
  width: 12px;
  height: 1px;
  transform: translate(-50%, 50%) rotate(90deg);
`;

const Posts = styled.ul<{ isClicked: boolean }>`
  display: ${props => (props.isClicked ? 'block' : 'none')};
  margin-top: 0.5rem;
`;

const Post = styled.li`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.color.textSecond};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

function CategoryItem({ heading, posts }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onMoreClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>
          {heading} ({posts.length})
        </Title>
        <More onClick={onMoreClick} isClicked={isClicked}>
          <Line1 />
          <Line2 />
          {/* <FontAwesomeIcon icon={faPlus} /> */}
        </More>
      </Header>
      <Posts isClicked={isClicked}>
        {posts.map(post => (
          <Post key={post.title}>
            <Link to={post.link}>{post.title}</Link>
          </Post>
        ))}
      </Posts>
    </Wrapper>
  );
}

export default CategoryItem;
