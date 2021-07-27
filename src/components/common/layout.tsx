import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { softLight, softDark, hardLight, hardDark } from '../../styles/themes';
import Fonts from '../../styles/fonts';
import Globalstyles from '../../styles/global';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  background: ${props => props.theme.color.backMain};
`;

function Layout({ children }: Props) {
  return (
    <>
      <Fonts />
      <ThemeProvider theme={softLight}>
        <Globalstyles />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
