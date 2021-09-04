import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from 'react';

type Props = {
  children: ReactNode;
};

type Value = {
  queryString: string;
  location: any;
  setQueryString?: Dispatch<SetStateAction<string>>;
  setLocation?: Dispatch<SetStateAction<any>>;
};

const LocationContext = createContext<Value>({
  queryString: '',
  location: null,
});

export default function LocationProvider({ children }: Props) {
  const [location, setLocation] = useState<any>(null);
  const [queryString, setQueryString] = useState<string>('');

  return (
    <LocationContext.Provider
      value={{ queryString, setQueryString, location, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => {
  const { location, setLocation } = useContext(LocationContext);
  return { location, setLocation };
};

export const useQueryString = () => {
  const { queryString, setQueryString } = useContext(LocationContext);
  return { queryString, setQueryString };
};
