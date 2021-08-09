import React from 'react';
import ThemeProvider from './src/store/theme_provider';
import GlobalComponent from './src/components/global/global-component';

export const wrapPageElement = ({ element, props }) => {
  return <GlobalComponent {...props}>{element}</GlobalComponent>;
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
