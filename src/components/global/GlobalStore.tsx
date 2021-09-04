import React, { ReactNode } from 'react';
// stores
import LocationProvider from '../../store/Location';
import ThemeProvider from '../../store/Theme';

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
