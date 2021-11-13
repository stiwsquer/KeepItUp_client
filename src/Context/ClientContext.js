import { createContext, useContext, useState } from 'react';

const ClientContext = createContext();

export const useClientContext = () => useContext(ClientContext);

export const ClientContextProvider = ({ children }) => {
  const [client, setClient] = useState(false);

  const toggleClient = () => {
    setClient((prev) => !prev);
  };
  return (
    <ClientContext.Provider value={[client, toggleClient]}>
      {children}
    </ClientContext.Provider>
  );
};
