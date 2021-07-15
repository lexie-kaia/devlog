import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  /* border: 1px solid red; */
`;

const Logo = styled.h1``;

const LogoLink = styled(Link)`
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;

  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoLink to="/">GG.LOG</LogoLink>
      </Logo>
    </HeaderContainer>
  );
}

export default Header;
