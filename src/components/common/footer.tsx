import React from 'react';
import styled from '@emotion/styled';
import { Github, Google } from 'react-bootstrap-icons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 5rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const Copyright = styled.p``;

const Contact = styled.p``;

const Anchor = styled.a`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    text-decoration: underline;
  }
`;

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <FooterContainer>
      <Copyright>© {getYear()} GG.LOG all rights reserved.</Copyright>
      <Contact>
        <Anchor href="mailto:kaia.gayeon.kim@gmail.com">Mail</Anchor>
        <Anchor href="https://github.com/lexie-kaia">Github</Anchor>
      </Contact>
    </FooterContainer>
  );
}

export default Footer;
