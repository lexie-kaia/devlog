import React, { useState } from 'react';
import styled from '@emotion/styled';
// component
import { Link } from 'gatsby';
import MoreList from './morelist';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
//
import { MorePostType } from '../../../types';

type Props = {
  postCategory: string;
  postId: string;
  moreList: MorePostType[];
};

const Container = styled.section`
  padding: 1.5rem 1rem;
  background: ${props => props.theme.color.backSub};

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

const Body = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 0.25rem 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;

const TitleLink = styled(Link)`
  color: ${props => props.theme.color.highlight};

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const OpenButton = styled.button<{ isOpen: boolean }>`
  margin-left: 0.75rem;
  transform: ${props => (props.isOpen ? 'rotate(0)' : 'rotate(180deg)')};

  svg {
    fill: ${props => props.theme.color.textMain};
    stroke: ${props => props.theme.color.textMain};
    stroke-width: 1px;
    width: 16px;
    height: 16px;
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      fill: ${props => props.theme.color.highlight};
      stroke: ${props => props.theme.color.highlight};
    }
  }
`;

const MoreButton = styled.button<{ hasMore: boolean }>`
  display: ${props => (props.hasMore ? 'flex' : 'none')};
  align-items: center;
  margin: 0.75rem 0;
  color: ${props => props.theme.color.textSub};

  svg {
    fill: ${props => props.theme.color.textSub};
    stroke: ${props => props.theme.color.textSub};
    stroke-width: 1px;
    width: 14px;
    height: 14px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: ${props => props.theme.color.highlight};

    svg {
      fill: ${props => props.theme.color.highlight};
      stroke: ${props => props.theme.color.highlight};
    }
  }
`;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const ButtonText = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-right: 0.25rem;
`;

function MoreSection({ postCategory, moreList, postId }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [listLength, setListlength] = useState<number>(5);

  const onOpenButtonClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onMoreButtonClick = () => {
    if (listLength + 5 > moreList.length) {
      setListlength(moreList.length);
    } else {
      setListlength(value => value + 5);
    }
  };
  return (
    <Container>
      <Header>
        <Title>
          more from{' '}
          <TitleLink to={`/?category=${postCategory}`}>
            {postCategory.replace(/\-/g, ' · ')}
          </TitleLink>
        </Title>
        <OpenButton onClick={onOpenButtonClick} isOpen={isOpen}>
          <ButtonIcon>
            <ChevronUp />
          </ButtonIcon>
        </OpenButton>
      </Header>

      <Body isOpen={isOpen}>
        <MoreList moreList={moreList.slice(0, listLength)} postId={postId} />
        <MoreButton
          onClick={onMoreButtonClick}
          hasMore={listLength < moreList.length}
        >
          <ButtonText>show more</ButtonText>
          <ButtonIcon>
            <ChevronDown />
          </ButtonIcon>
        </MoreButton>
      </Body>
    </Container>
  );
}

export default MoreSection;
