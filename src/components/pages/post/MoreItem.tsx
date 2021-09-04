import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
// components
import TagRenderer from '../../common/Tag';
// types
import { MorePostFrontMatterType } from '../../../types';

type Props = MorePostFrontMatterType & {
  slug: string;
  isCurrentPost: boolean;
};

export default function MoreItemRenderer({
  title,
  date,
  tags,
  slug,
  isCurrentPost,
}: Props) {
  return (
    <MoreItem>
      <Title>
        {!isCurrentPost ? (
          <TitleLink to={`/${slug}`}>{title}</TitleLink>
        ) : (
          <CurrentPost>{title}</CurrentPost>
        )}
      </Title>
      <Flex>
        <Date>{date}</Date>
        <TagRenderer tags={tags} />
      </Flex>
    </MoreItem>
  );
}

const MoreItem = styled.li`
  padding: 0.5rem 0;
`;

const Title = styled.h3`
  font-size: 18px;
  line-height: 28px;
`;

const TitleLink = styled(Link)`
  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--highlight);
    text-decoration: underline;
  }
`;

const CurrentPost = styled.span`
  color: var(--text-second);
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
