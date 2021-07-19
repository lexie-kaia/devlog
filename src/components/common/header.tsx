import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import LogoSvg from '../../assets/logosvg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  /* border: 1px solid red; */
`;

const LogoLink = styled(Link)`
  margin-top: 0.5rem;

  svg {
    height: 1rem;
    fill: ${props => props.theme.color.textMain};
  }

  &:hover,
  &:focus {
    outline: none;
    svg {
      fill: ${props => props.theme.color.highlight};
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoSvg />
      </LogoLink>
    </HeaderContainer>
  );
}

export default Header;
