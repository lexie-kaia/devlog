import React, { ReactNode, useEffect } from 'react';
// components
import Fonts from '../../styles/Fonts';
import Globalstyles from '../../styles/GlobalStyles';
// stores
import { useLocation, useQueryString } from '../../store/Location';

type Props = {
  children: ReactNode;
  location: any;
};

function GlobalComponent({ children, location }: Props) {
  const { queryString, setQueryString } = useQueryString();
  const { location: _location, setLocation } = useLocation();

  useEffect(() => {
    setLocation && setLocation(location);
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
