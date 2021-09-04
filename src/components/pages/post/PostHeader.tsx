import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
// components
import ShareRenderer from '../../common/Share';
import TagRenderer from '../../common/Tag';
// types
import { PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType;

export default function PostHeader({ title, date, category, tags }: Props) {
  return (
    <Header>
      <Category>
        <Link to={`/?category=${category}`}>
          {category.replace(/\-/g, ' · ')}
        </Link>
      </Category>
      <Title id={title.replace(/ /g, '-')}>{title}</Title>
      <WrapperRow>
        <WrapperColumn>
          <Date>{date}</Date>
          <TagRenderer tags={tags} />
        </WrapperColumn>
        <WrapperColumn>
          <ShareRenderer />
        </WrapperColumn>
      </WrapperRow>
    </Header>
  );
}

const Header = styled.header`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--line);
`;

const Category = styled.p`
  margin-bottom: 0.25rem;
  color: var(--highlight);
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
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`;

const Date = styled.p`
  margin-bottom: 0.25rem;
  color: var(--text-second);
  font-size: 14px;
  line-height: 20px;
`;

const WrapperRow = styled.div`
  @media screen and (min-width: 577px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const WrapperColumn = styled.div`
  &:first-of-type {
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 577px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;
