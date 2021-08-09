import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Tag from '../../common/tag';
import { MorePostFrontMatterType } from '../../../types';

type Props = MorePostFrontMatterType & {
  slug: string;
  isCurrentPost: boolean;
};

const Container = styled.li`
  padding: 0.5rem 0;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 28px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`;

const CurrentPost = styled.span`
  color: var(--highlight);
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Date = styled.span`
  color: var(--text-second);
  font-size: 14px;
  line-height: 20px;

  &::after {
    content: '|';
    margin: 0 0.5rem;
  }
`;

function MoreItem({ title, date, tags, slug, isCurrentPost }: Props) {
  return (
    <Container>
      <Title>
        {!isCurrentPost ? (
          <Link to={`/${slug}`}>{title}</Link>
        ) : (
          <CurrentPost>{title}</CurrentPost>
        )}
      </Title>
      <Flex>
        <Date>{date}</Date>
        <Tag tags={tags} />
      </Flex>
    </Container>
  );
}

export default MoreItem;
