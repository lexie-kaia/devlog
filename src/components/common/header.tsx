import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import LogoXSvg from '../../assets/logo-x-svg';
import LogoWordSvg from '../../assets/logo-word-svg';

const Container = styled.header`
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  box-shadow: ${props => `0 0 10px ${props.theme.color.shadow}`};
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (min-width: 577px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 769px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 961px) {
    padding: 0 4rem;
  }
`;

const Logo = styled.div``;

const SvgWrapper = styled.div`
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

  &:hover {
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
          <Link to="/">
            <SvgWrapper>
              <div className="logo-symbol">
                <LogoXSvg />
              </div>
              <div className="logo-word">
                <LogoWordSvg />
              </div>
            </SvgWrapper>
          </Link>
        </Logo>
      </Contents>
    </Container>
  );
}

export default Header;
