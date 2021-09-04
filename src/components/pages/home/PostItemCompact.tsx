import React from 'react';
import styled from '@emotion/styled';
// components
import { Link } from 'gatsby';
import TagRenderer from '../../common/Tag';
// types
import { PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType & { slug: string };

export default function PostItemList({
  category,
  title,
  date,
  tags,
  slug,
}: Props) {
  return (
    <>
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
        <TagRenderer tags={tags} />
      </Metadata>
    </>
  );
}

const Title = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 22px;
  line-height: 32px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = styled.span`
  color: var(--highlight);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;

  a {
    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Date = styled.span`
  color: var(--text-second);
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
