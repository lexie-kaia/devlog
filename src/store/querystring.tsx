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
  setQueryString?: Dispatch<SetStateAction<string>>;
};

const QueryStringContext = createContext<Value>({ queryString: '' });

export default function QueryStringProvider({ children }: Props) {
  const [queryString, setQueryString] = useState<string>('');

  return (
    <QueryStringContext.Provider value={{ queryString, setQueryString }}>
      {children}
    </QueryStringContext.Provider>
  );
}

export const useQueryString = () => {
  const { queryString, setQueryString } = useContext(QueryStringContext);
  return { queryString, setQueryString };
};
