import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { softLight, softDark, hardLight, hardDark } from '../../styles/themes';
import Fonts from '../../styles/fonts';
import Globalstyles from '../../styles/globalstyles';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
  layoutType: 'list' | 'fullPage';
};

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;

const ListContainer = styled.div``;

function Layout({ children, layoutType }: Props) {
  return (
    <>
      <Fonts />
      <ThemeProvider theme={softLight}>
        <Globalstyles />
        {layoutType === 'list' && (
          <ListContainer>
            <Header />
            {children}
          </ListContainer>
        )}
        {layoutType === 'fullPage' && (
          <FullPageContainer>
            <Header />
            {children}
            <Footer />
          </FullPageContainer>
        )}
      </ThemeProvider>
    </>
  );
}

export default Layout;
