import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { PrevNextPostType } from '../../../types';

type Props = {
  prev: PrevNextPostType;
  next: PrevNextPostType;
};

const Container = styled.div`
  padding: 1rem 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Column = styled.div`
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
  color: ${props => props.theme.color.textSub};

  svg {
    width: 10px;
    height: 10px;
    fill: ${props => props.theme.color.textSub};
    stroke: ${props => props.theme.color.textSub};
    stroke-width: 1.5px;
  }

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const LinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  &:first-of-type {
    margin-right: 0.25rem;
  }

  &:last-of-type {
    margin-left: 0.25rem;
  }
`;

const LinkText = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;

  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    text-decoration: underline;
  }
`;

function PrevNext({ prev, next }: Props) {
  return (
    <>
      <Container>
        <Column>
          {prev && (
            <PrevNextItem>
              <IconLink to={`/${prev.slug}`}>
                <LinkIcon>
                  <ChevronLeft />
                </LinkIcon>
                <LinkText>prev</LinkText>
              </IconLink>
              <TitleLink to={`/${prev.slug}`}>
                {prev.frontmatter.title}
              </TitleLink>
            </PrevNextItem>
          )}
        </Column>

        <Column>
          {next && (
            <PrevNextItem align="right">
              <IconLink to={`/${next.slug}`}>
                <LinkText>next</LinkText>
                <LinkIcon>
                  <ChevronRight />
                </LinkIcon>
              </IconLink>
              <TitleLink to={`/${next.slug}`}>
                {next.frontmatter.title}
              </TitleLink>
            </PrevNextItem>
          )}
        </Column>
      </Container>
    </>
  );
}

export default PrevNext;
