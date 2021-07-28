import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostFrontMatterType } from '../../types';

type Props = PostFrontMatterType & { slug: string };

const Container = styled.li`
  padding: 1.5rem 0;
`;

const Title = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 22px;
  line-height: 32px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.highlight};
      text-decoration: underline;
    }
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = styled.span`
  color: ${props => props.theme.color.highlight};
  font-size: 14px;
  line-height: 20px;
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

const Date = styled.span`
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;

  &::before {
    content: '|';
    margin: 0 0.5rem;
  }

  &::after {
    content: '|';
    margin: 0 0.5rem;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.color.textSub};
`;

const TagItem = styled.li`
  margin-right: 0.25rem;

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

function PostItemList({ category, title, date, tags, slug }: Props) {
  return (
    <Container>
      <Title>
        <Link to={`/${slug}`}>{title}</Link>
      </Title>
      <Metadata>
        <Category>
          <Link to={`/?category=${category}`}>
            {category.replace(/\-/g, ' · ')}
          </Link>
        </Category>
        <Date>{date}</Date>
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag}>
              <Link to={`/?tag=${tag}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagList>
      </Metadata>
    </Container>
  );
}

export default PostItemList;
