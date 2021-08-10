import React, { ReactNode } from 'react';
import QueryStringProvider from '../../store/querystring';
import ThemeProvider from '../../store/theme';

type Props = {
  children: ReactNode;
};

function GlobalProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <QueryStringProvider>{children}</QueryStringProvider>
    </ThemeProvider>
  );
}

export default GlobalProvider;
