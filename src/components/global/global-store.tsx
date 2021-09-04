import React, { ReactNode } from 'react';
import LocationProvider from '../../store/location';
import ThemeProvider from '../../store/theme';

type Props = {
  children: ReactNode;
};

function GlobalProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <LocationProvider>{children}</LocationProvider>
    </ThemeProvider>
  );
}

export default GlobalProvider;
