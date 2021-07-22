import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { softLight, softDark, hardLight, hardDark } from '../../styles/themes';
import Fonts from '../../styles/fonts';
import Globalstyles from '../../styles/global';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  height: 100%;
  min-height: 100vh;
  @media screen and (min-width: 769px) {
    padding: 0 5rem;
  }
`;

function Layout({ children }: Props) {
  return (
    <>
      <Fonts />
      <ThemeProvider theme={softLight}>
        <Globalstyles />
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
