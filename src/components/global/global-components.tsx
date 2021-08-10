import React, { ReactNode, useEffect } from 'react';
import { useQueryString } from '../../store/querystring';
import Fonts from '../../styles/fonts';
import Globalstyles from '../../styles/globalstyles';

type Props = {
  children: ReactNode;
  location: any;
};

function GlobalComponent({ children, location }: Props) {
  const { queryString, setQueryString } = useQueryString();

  useEffect(() => {
    setQueryString && setQueryString(location.search);
  }, [location]);

  return (
    <>
      <Fonts />
      <Globalstyles />
      {children}
    </>
  );
}

export default GlobalComponent;
