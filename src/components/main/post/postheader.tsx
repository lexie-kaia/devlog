import React from 'react';
import styled from '@emotion/styled';
// components
import { Link } from 'gatsby';
import Share from '../../common/share';
import Tag from '../../common/tag';
// type
import { PostFrontMatterType } from '../../../types';

type Props = PostFrontMatterType;

const Container = styled.div`
  padding: 1.5rem 0;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
`;

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

const Flex = styled.div`
  @media screen and (min-width: 577px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Column = styled.div`
  &:first-of-type {
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 577px) {
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;

function PostHeader({ title, date, category, tags }: Props) {
  return (
    <Container>
      <Category>
        <Link to={`/?category=${category}`}>
          {category.replace(/\-/g, ' · ')}
        </Link>
      </Category>
      <Title>{title}</Title>
      <Flex>
        <Column>
          <Date>{date}</Date>
          <Tag tags={tags} />
        </Column>
        <Column>
          <Share />
        </Column>
      </Flex>
    </Container>
  );
}

export default PostHeader;
