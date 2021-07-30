import React from 'react';
import styled from '@emotion/styled';
//components
import { Link } from 'gatsby';
import Tag from '../../common/tag';
// types
import { PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType & { slug: string };

const Category = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.highlight};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;

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

function PostItemBlock({ title, date, category, tags, slug }: Props) {
  return (
    <>
      <Category>
        <Link to={`/?category=${category}`}>
          {category.replace(/\-/g, ' · ')}
        </Link>
      </Category>
      <Title>
        <Link to={`/${slug}`}>{title}</Link>
      </Title>
      <Date>{date}</Date>
      <Tag tags={tags} />
    </>
  );
}

export default PostItemBlock;
