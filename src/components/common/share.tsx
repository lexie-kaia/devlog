import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Facebook, Link45deg, Twitter } from 'react-bootstrap-icons';
// components
import IconButton from './IconButton';
// stores
import { useLocation } from '../../store/Location';

type PopupRectType = {
  width: number;
  height: number;
  left: number;
  top: number;
};

export default function ShareRenderer() {
  const { location, setLocation } = useLocation();
  const [popupRect, setPopupRect] = useState<PopupRectType>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  useEffect(() => {
    const width = 500;
    const height = 450;
    const left = Math.floor((window.screen.width - width) / 2);
    const top = Math.floor((window.screen.height - height) / 2);

    setPopupRect({
      width,
      height,
      left,
      top,
    });
  }, []);

  const onFBButtonClick = () => {
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${location.href}`,
      '',
      `width=${popupRect.width}, height=${popupRect.height}, left=${popupRect.left}, top=${popupRect.top}`
    );
  };

  const onTWButtonClick = () => {
    // window.open("http://twitter.com/intent/tweet?url=" + link + "&text=" + title, '', 'width='+ _width +', height='+ _height +', left=' + _left + ', top='+ _top);
    // &text=${title}
    window.open(
      `http://twitter.com/intent/tweet?url=${location.href}`,
      '',
      `width=${popupRect.width}, height=${popupRect.height}, left=${popupRect.left}, top=${popupRect.top}`
    );
  };

  const onLinkButtonClick = () => {
    const invisibleInput = document.createElement('input');
    document.body.appendChild(invisibleInput);
    invisibleInput.value = location.href;
    invisibleInput.select();
    document.execCommand('copy');
    document.body.removeChild(invisibleInput);

    setIsModalShown(true);
    setTimeout(() => {
      setIsModalShown(false);
    }, 2000);
  };

  return (
    <ShareButtons>
      <FacebookButton onClick={onFBButtonClick}>
        <Facebook />
      </FacebookButton>
      <TwitterButton onClick={onTWButtonClick}>
        <Twitter />
      </TwitterButton>
      <LinkButton onClick={onLinkButtonClick}>
        <Link45deg />
      </LinkButton>
      <ModalContainer>
        <ModalContent isModalShown={isModalShown}>
          Link has been copied to clipboard
        </ModalContent>
      </ModalContainer>
    </ShareButtons>
  );
}

const ShareButtons = styled.div`
  display: flex;
`;

const ShareButton = styled(IconButton)`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FacebookButton = styled(ShareButton)``;
const TwitterButton = styled(ShareButton)``;
const LinkButton = styled(ShareButton)`
  svg {
    stroke: var(--text-second);
    stroke-width: 0.5px;
  }

  &:hover,
  &:focus,
  &:active {
    svg {
      stroke: var(--highlight);
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 50%;
  z-index: 5;
  overflow: hidden;
  max-width: 288px;
  width: 100%;
  height: 3rem;
  transform: translateX(50%);
  pointer-events: none;

  @media screen and (min-width: 961px) {
    margin: 0;
    right: 4rem;
    transform: translateX(0);
  }
`;

const ModalContent = styled.div<{ isModalShown: boolean }>`
  max-width: 288px;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1rem;
  background: var(--highlight);
  color: var(--back-main);
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition: transform 300ms ease-in-out;
  transform: ${props =>
    props.isModalShown ? `translateY(0)` : `translateY(100%)`};
`;
