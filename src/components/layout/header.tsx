import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import LogoXSvg from '../../assets/logo-x-svg';
import LogoWordSvg from '../../assets/logo-word-svg';
import ContentsArea from './contentsarea';

const Container = styled.header`
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  box-shadow: ${props => `0 0 10px ${props.theme.color.shadow}`};
`;

const Contents = styled(ContentsArea)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
`;

const Logo = styled.div``;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div[class='logo-symbol'] {
    padding: 3px;
    svg {
      height: 18px;
      fill: ${props => props.theme.color.textMain};
    }
  }

  div[class='logo-word'] {
    margin-left: 8px;
    padding-top: 5px;
    svg {
      height: 23px;
      fill: ${props => props.theme.color.textMain};
    }
  }

  &:hover,
  &:focus {
    outline: none;

    div[class='logo-symbol'] {
      background: ${props => props.theme.color.highlight};
      svg {
        fill: ${props => props.theme.color.backMain};
      }
    }

    div[class='logo-word'] {
      svg {
        fill: ${props => props.theme.color.highlight};
      }
    }
  }
`;

function Header() {
  return (
    <Container>
      <Contents>
        <Logo>
          <LogoLink to="/">
            <div className="logo-symbol">
              <LogoXSvg />
            </div>
            <div className="logo-word">
              <LogoWordSvg />
            </div>
          </LogoLink>
        </Logo>
      </Contents>
    </Container>
  );
}

export default Header;
