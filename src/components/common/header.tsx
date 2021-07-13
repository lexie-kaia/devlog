import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  /* border: 1px solid red; */
`;

const Logo = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
  line-height: 28px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>GG.LOG</Logo>
    </HeaderContainer>
  );
}

export default Header;
