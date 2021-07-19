import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { softLight, softDark, hardLight, hardDark } from '../../styles/themes';
import Globalstyles from '../../styles/global';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;

  @media screen and (min-width: 769px) {
    padding: 0 5rem;
  }
`;

function Layout({ children }: Props) {
  return (
    <>
      <Helmet>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
