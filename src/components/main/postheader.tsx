import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
  title: string;
  date: string;
  tags: string[];
};

const Header = styled.header`
  margin: 0 1rem;
  padding: 1.5rem 0;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 32px;
  line-height: 40px;
`;

const Date = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
  font-size: 14px;
  line-height: 20px;
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;
  text-transform: uppercase;

  a {
    &:before {
      content: '#';
    }

    color: ${props => props.theme.color.highlight};

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

function PostHeader({ title, date, tags }: Props) {
  return (
    <Header>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <TagList>
        {tags.map((tag: string, index: number) => (
          <TagItem key={tag}>
            <Link to={`/?tag=${tag}`}>{tag}</Link>
          </TagItem>
        ))}
      </TagList>
    </Header>
  );
}

export default PostHeader;
