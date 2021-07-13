import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { softLight } from '../../styles/themes';
import Globalstyles from '../../styles/globalstyles';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1304px;
  border: 1px solid red;
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
      </Helmet>
      <ThemeProvider theme={softLight}>
        <Globalstyles />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
