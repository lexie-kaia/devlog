import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
// types
import { PrevNextPostType } from '../../../types';

type Props = {
  prev: PrevNextPostType;
  next: PrevNextPostType;
};

export default function PrevNextRenderer({ prev, next }: Props) {
  return (
    <PrevNextDiv>
      <Wrapper>
        {prev && (
          <PrevNextItem>
            <IconLink to={`/${prev.slug}`}>
              <ChevronLeft />
              prev
            </IconLink>
            <TitleLink to={`/${prev.slug}`}>{prev.frontmatter.title}</TitleLink>
          </PrevNextItem>
        )}
      </Wrapper>
      <Wrapper>
        {next && (
          <PrevNextItem align="right">
            <IconLink to={`/${next.slug}`}>
              next
              <ChevronRight />
            </IconLink>
            <TitleLink to={`/${next.slug}`}>{next.frontmatter.title}</TitleLink>
          </PrevNextItem>
        )}
      </Wrapper>
    </PrevNextDiv>
  );
}

const PrevNextDiv = styled.div`
  padding: 1rem 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const PrevNextItem = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.align
      ? props.align === 'right'
        ? 'flex-end'
        : 'flex-start'
      : 'flex-start'};
`;

const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  color: var(--text-second);
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  svg {
    width: 10px;
    height: 10px;
    stroke: var(--text-second);
    stroke-width: 1.5px;

    &:first-of-type {
      margin-right: 0.25rem;
    }

    &:last-of-type {
      margin-left: 0.25rem;
    }
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: var(--highlight);
    text-decoration: underline;
  }
`;
