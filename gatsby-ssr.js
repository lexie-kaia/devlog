import React from 'react';
import GlobalProvider from './src/components/global/global-store';
import GlobalComponent from './src/components/global/global-components';

export const wrapPageElement = ({ element, props }) => {
  return <GlobalComponent {...props}>{element}</GlobalComponent>;
};

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>;
};
