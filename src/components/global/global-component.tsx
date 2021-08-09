import React, { ReactNode } from 'react';
import Fonts from '../../styles/fonts';
import Globalstyles from '../../styles/globalstyles';

type Props = {
  children: ReactNode;
};

function GlobalComponent({ children }: Props) {
  return (
    <>
      <Fonts />
      <Globalstyles />
      {children}
    </>
  );
}

export default GlobalComponent;
