import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostFrontMatterType } from '../../types';

type Props = PostFrontMatterType & { slug: string };

const Container = styled.li`
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  }
`;

const Category = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.highlight};
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;

  a {
    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 32px;
  line-height: 40px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.highlight};
      text-decoration: underline;
    }
  }
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
  text-transform: uppercase;
  color: ${props => props.theme.color.textSub};
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;

  a {
    &:before {
      content: '#';
    }

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

function PostItemBlock({ category, title, date, tags, slug }: Props) {
  return (
    <Container>
      <Category>
        <Link to={`/?category=${category}`}>
          {category.replace(/\-/g, ' · ')}
        </Link>
      </Category>
      <Title>
        <Link to={`/${slug}`}>{title}</Link>
      </Title>
      <Date>{date}</Date>
      <TagList>
        {tags.map(tag => (
          <TagItem key={tag}>
            <Link to={`/?tag=${tag}`}>{tag}</Link>
          </TagItem>
        ))}
      </TagList>
    </Container>
  );
}

export default PostItemBlock;
