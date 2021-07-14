import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

type Props = {
  title: string;
  summary: string;
  tags: string[];
  date: string;
};

const Wrapper = styled.li`
  padding: 1rem 0;
  border-top: ${props => `1px solid ${props.theme.color.line}`};
  transition: background 300ms ease-in-out;

  &:last-child {
    border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  }
`;

const Info = styled.div``;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const TitleLink = styled(Link)`
  font-size: 22px;
  line-height: 28px;

  &:hover {
    text-decoration: underline;
  }
`;

const Summary = styled.p`
  margin-bottom: 0.4rem;
`;

const SummaryLink = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.color.textSub};
`;

const Date = styled.p`
  margin-bottom: 0.375rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
`;

const Tag = styled.li`
  margin: 0 0.25rem 0.25rem 0;
`;

const TagLink = styled(Link)`
  padding: 0 0.5rem;
  border-radius: 1rem;
  color: ${props => props.theme.color.textSub};
  border: ${props => `1px solid ${props.theme.color.line}`};
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

function PostItem({ title, summary, tags, date }: Props) {
  return (
    <Wrapper>
      <Info>
        <Title>
          <TitleLink to="/">{title}</TitleLink>
        </Title>
        <Summary>
          <SummaryLink to="/">{summary}</SummaryLink>
        </Summary>
        <Date>{date}</Date>
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>
              <TagLink to="/">{tag}</TagLink>
            </Tag>
          ))}
        </Tags>
      </Info>
    </Wrapper>
  );
}

export default PostItem;