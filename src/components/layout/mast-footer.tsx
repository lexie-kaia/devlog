import React from 'react';
import styled from '@emotion/styled';
// components
import PageMargin from '../common/page-margin';

const Container = styled.footer`
  border-top: 1px solid var(--line);
`;

const Contents = styled(PageMargin)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  color: var(--text-second);
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
    color: var(--highlight);
    text-decoration: underline;
  }
`;

function MastFooter() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <Container>
      <Contents>
        <Copyright>© {getYear()} LEXIE all rights reserved.</Copyright>
        <Contact>
          <Anchor href="mailto:kaia.gayeon.kim@gmail.com">Mail</Anchor>
          <Anchor href="https://github.com/lexie-kaia">Github</Anchor>
        </Contact>
      </Contents>
    </Container>
  );
}

export default MastFooter;
