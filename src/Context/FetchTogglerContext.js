import { createContext, useContext, useState } from 'react';

const FetchTogglerContext = createContext();

export const useFetchTogglerContext = () => useContext(FetchTogglerContext);

export const FetchTogglerContextProvider = ({ children }) => {
  const [fetch, setFetch] = useState(false);

  const toggleFetch = () => {
    setFetch((prev) => !prev);
  };
  return (
    <FetchTogglerContext.Provider value={[fetch, toggleFetch]}>
      {children}
    </FetchTogglerContext.Provider>
  );
};
