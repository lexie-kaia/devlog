import React from 'react';
import styled from '@emotion/styled';
import { H3, P } from '../../styles/typo';

type Props = { title: string; tags: string[]; date: string };

const Wrapper = styled.li`
  padding: 1rem 0;
  border-top: ${props => `1px solid ${props.theme.color.line}`};

  &:last-child {
    border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  }
`;

const Title = styled(H3)`
  margin-bottom: 0.25rem;
`;

const Info = styled.div``;

const Date = styled(P)`
  margin-right: 1rem;
  color: ${props => props.theme.color.textSecond};
`;

const Tags = styled.ul`
  display: flex;
  margin-bottom: 0.25rem;
`;

const Tag = styled.li`
  margin-right: 0.5rem;
  color: ${props => props.theme.color.textSecond};
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;

  &::before {
    content: '#';
  }
`;

function PostItem({ title, tags, date }: Props) {
  return (
    <Wrapper>
      <Title size="medium">{title}</Title>
      <Info>
        <Tags>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Date size="xSmall">{date}</Date>
      </Info>
    </Wrapper>
  );
}

export default PostItem;
