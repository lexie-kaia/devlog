import React, {
  useState,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
} from 'react';
import styled from '@emotion/styled';
import { ChevronDown } from 'react-bootstrap-icons';
// components
import ListStyleItemContent from './liststyleitemcontent';
// types
import { PostListStyleType } from '../../../types';

type Props = {
  listStyle: PostListStyleType;
  setListStyle: Dispatch<SetStateAction<PostListStyleType>>;
};

const SelectContainer = styled.div`
  position: relative;

  svg[class='item-icon'] {
    margin-right: 0.5rem;
    width: 14px;
    height: 14px;
  }

  span[class='item-text'] {
    font-size: 13px;
    line-height: 20px;
    text-transform: uppercase;
  }

  svg[class*='chevron'] {
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

function ListStyleSelect({ listStyle, setListStyle }: Props) {
  const [isStyleListOpen, setIsStyleListOpen] = useState<boolean>(false);
  const [currentStyleItemIndex, setCurrentStyleItemIndex] = useState<
    number | null
  >(null);

  const onSelectButtonClick = () => {
    setIsStyleListOpen(!isStyleListOpen);
  };

  const onSelectButtonBlur = () => {
    if (isStyleListOpen) {
      setTimeout(() => {
        setIsStyleListOpen(false);
      }, 200);
    }
  };

  const onSelectButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.code) {
      case 'Space':
        event.preventDefault();
        setIsStyleListOpen(true);
        setCurrentStyleItemIndex(0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentStyleItemIndex === 1) {
          setCurrentStyleItemIndex(0);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (currentStyleItemIndex === 0) {
          setCurrentStyleItemIndex(1);
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (!isStyleListOpen) {
          setIsStyleListOpen(true);
          setCurrentStyleItemIndex(0);
        } else {
          setIsStyleListOpen(false);
          if (currentStyleItemIndex === 1) {
            setListStyle('compact');
          } else {
            setListStyle('default');
          }
          setCurrentStyleItemIndex(null);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsStyleListOpen(false);
        setCurrentStyleItemIndex(null);
        break;
    }
  };

  const onDefaultItemClick = () => {
    setListStyle('default');
    setIsStyleListOpen(false);
  };

  const onCompactItemClick = () => {
    setListStyle('compact');
    setIsStyleListOpen(false);
  };

  return (
    <SelectContainer>
      <SelectButton
        onClick={onSelectButtonClick}
        onBlur={onSelectButtonBlur}
        onKeyDown={onSelectButtonKeyDown}
      >
        <Wrapper>
          <ListStyleItemContent contentType={listStyle} />
        </Wrapper>
        <ChevronDown className="item-icon chevron" />
      </SelectButton>

      <StyleList isStyleListOpen={isStyleListOpen}>
        <StyleItem
          onClick={onDefaultItemClick}
          isCurrentStyleItem={currentStyleItemIndex === 0}
        >
          <ListStyleItemContent contentType="default" />
        </StyleItem>
        <StyleItem
          onClick={onCompactItemClick}
          isCurrentStyleItem={currentStyleItemIndex === 1}
        >
          <ListStyleItemContent contentType="compact" />
        </StyleItem>
      </StyleList>
    </SelectContainer>
  );
}

export default ListStyleSelect;
