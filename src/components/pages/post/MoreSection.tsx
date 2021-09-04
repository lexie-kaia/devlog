import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ChevronDown } from 'react-bootstrap-icons';
// components
import MoreListRenderer from './MoreList';
// types
import { MorePostType } from '../../../types';

type Props = {
  postCategory: string;
  postId: string;
  moreList: MorePostType[];
};

export default function MoreSectionRenderer({
  postCategory,
  moreList,
  postId,
}: Props) {
  const [listLength, setListlength] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickMoreButton = () => {
    if (!isOpen) {
      setListlength(moreList.length);
    } else {
      setListlength(3);
    }

    setIsOpen(!isOpen);
  };

  return (
    <MoreSection>
      <Header>
        <Title>
          more from{' '}
          <TitleLink to={`/?category=${postCategory}`}>
            {postCategory.replace(/\-/g, ' · ')}
          </TitleLink>
        </Title>
      </Header>

      <Body>
        <MoreListRenderer
          moreList={moreList.slice(0, listLength)}
          postId={postId}
        />
        <MoreButton onClick={onClickMoreButton} isListOpen={isOpen}>
          {isOpen ? 'show less' : 'show more'}
          <ChevronDown />
        </MoreButton>
      </Body>
    </MoreSection>
  );
}

const MoreSection = styled.section`
  padding: 1.5rem 1rem;
  background: var(--back-sub);

  @media screen and (min-width: 577px) {
    padding: 1.5rem 2rem;
  }

  @media screen and (min-width: 769px) {
    padding: 1.5rem 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

const Body = styled.div`
  padding: 0.25rem 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

const TitleLink = styled(Link)`
  color: var(--highlight);

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const MoreButton = styled.button<{ isListOpen: boolean }>`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  color: var(--text-second);
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  svg {
    stroke: var(--text-second);
    stroke-width: 1px;
    width: 14px;
    height: 14px;
    margin-left: 0.5rem;
    transform: ${props => (props.isListOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
    color: var(--highlight);

    svg {
      stroke: var(--highlight);
    }
  }
`;
