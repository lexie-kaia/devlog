import React, { useState, KeyboardEvent } from 'react';
import styled from '@emotion/styled';
import { ChevronDown } from 'react-bootstrap-icons';
// components
import ListStyleItemContent from './ListSytyleItemContent';
// types
import { PostListStyleType } from '../../../types';

type Props = {
  listStyle: PostListStyleType;
  changeListStyle: (listStyle: PostListStyleType) => void;
};

export default function ListStyleSelectRenderer({
  listStyle,
  changeListStyle,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const onClickSelectButton = () => {
    setIsOpen(!isOpen);
  };

  const onBlurSelectButton = () => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  const onKeyDownSelectButton = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.code) {
      case 'Space':
        event.preventDefault();
        setIsOpen(true);
        setCurrentIndex(0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentIndex === 1) {
          setCurrentIndex(0);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (currentIndex === 0) {
          setCurrentIndex(1);
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setCurrentIndex(0);
        } else {
          setIsOpen(false);
          if (currentIndex === 1) {
            changeListStyle('compact');
          } else {
            changeListStyle('default');
          }
          setCurrentIndex(null);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setCurrentIndex(null);
        break;
    }
  };

  const onClickDefaultItem = () => {
    changeListStyle('default');
    setIsOpen(false);
  };

  const onClickCompactItem = () => {
    changeListStyle('compact');
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        onClick={onClickSelectButton}
        onBlur={onBlurSelectButton}
        onKeyDown={onKeyDownSelectButton}
      >
        <Wrapper>
          <ListStyleItemContent contentType={listStyle} />
        </Wrapper>
        <ChevronDown className="icon-chevron" />
      </SelectButton>

      <StyleList isStyleListOpen={isOpen}>
        <StyleItem
          onClick={onClickDefaultItem}
          isCurrentStyleItem={currentIndex === 0}
        >
          <ListStyleItemContent contentType="default" />
        </StyleItem>
        <StyleItem
          onClick={onClickCompactItem}
          isCurrentStyleItem={currentIndex === 1}
        >
          <ListStyleItemContent contentType="compact" />
        </StyleItem>
      </StyleList>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;

  .item-icon {
    margin-right: 0.5rem;
    width: 14px;
    height: 14px;
  }

  .item-text {
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
  }

  .icon-chevron {
    width: 12px;
    height: 12px;
  }
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 10rem;
  padding: 0 0.75rem;
  border-radius: 0.25rem;
  color: var(--text-second);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--highlight);
    background: var(--back-sub);
  }

  &:focus-visible {
    box-shadow: 0 0 1px 2px var(--highlight);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyleList = styled.ul<{ isStyleListOpen: boolean }>`
  position: absolute;
  overflow: hidden;
  display: ${props => (props.isStyleListOpen ? `block` : `none`)};
  width: 10rem;
  border: 1px solid var(--line);
  border-radius: 0.25rem;
  background: var(--back-main);
`;

const StyleItem = styled.li<{ isCurrentStyleItem: boolean }>`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
  color: ${props =>
    props.isCurrentStyleItem ? `var(--highlight)` : `var(--text-second)`};
  background: ${props =>
    props.isCurrentStyleItem ? `var(--back-sub)` : `var(--back-main)`};

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--highlight);
    background: var(--back-sub);
    cursor: pointer;
  }
`;
