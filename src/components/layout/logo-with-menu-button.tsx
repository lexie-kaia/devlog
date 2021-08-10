import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { List } from 'react-bootstrap-icons';
//components
import IconButton from '../common/icon-button';
import LogoXSvg from '../../assets/logo/logo-x-svg';
import LogoWordSvg from '../../assets/logo/logo-word-svg';

type Props = {
  toggleSideMenu: () => void;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled(IconButton)`
  margin-right: 0.5rem;
`;

const Logo = styled.div``;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  div[class*='svg-wrapper'] {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div[class*='logo-symbol'] {
    padding: 3px;
    svg {
      height: 18px;
      fill: var(--text-prime);
    }
  }

  div[class*='logo-word'] {
    margin-left: 8px;
    padding-top: 5px;
    svg {
      height: 23px;
      fill: var(--text-prime);
    }
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;

    div[class*='logo-symbol'] {
      background: var(--highlight);
      svg {
        fill: var(--back-main);
      }
    }

    div[class*='logo-word'] {
      svg {
        fill: var(--highlight);
      }
    }
  }
`;

function LogoWithMenuButton({ toggleSideMenu }: Props) {
  return (
    <Wrapper>
      <MenuButton onClick={toggleSideMenu}>
        <List />
      </MenuButton>
      <Logo>
        <LogoLink to="/">
          <div className="svg-wrapper logo-symbol">
            <LogoXSvg />
          </div>
          <div className="svg-wrapper logo-word">
            <LogoWordSvg />
          </div>
        </LogoLink>
      </Logo>
    </Wrapper>
  );
}

export default LogoWithMenuButton;
