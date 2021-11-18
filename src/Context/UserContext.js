import { createContext, useContext, useState } from 'react';
// import {
//   CREDENTIALS,
//   ENDPOINTS,
//   fetchData,
//   HTTP_METHODS,
// } from '../services/apiCalls';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  // useEffect(async () => {
  //   let res = await fetchData(
  //     null,
  //     HTTP_METHODS.POST,
  //     ENDPOINTS.VERIFY,
  //     CREDENTIALS.INCLUDE,
  //   );

  //   if (res.status === 200) {
  //     res = await res.json();
  //     console.log(res);
  //     setUser(res);
  //   } else setUser(false);
  // }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
