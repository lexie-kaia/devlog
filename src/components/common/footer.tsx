import React from 'react';
import styled from '@emotion/styled';
import { P } from '../../styles/typo';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 4rem;
`;

const Copyright = styled(P)`
  color: ${props => props.theme.color.textSecond};
`;

const Contact = styled.div``;

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <FooterContainer>
      <Copyright size="xSmall">
        © {getYear()} GG.LOG all rights reserved.
      </Copyright>
      <Contact></Contact>
    </FooterContainer>
  );
}

export default Footer;
