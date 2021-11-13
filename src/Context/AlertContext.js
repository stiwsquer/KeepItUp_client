import { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from '@mui/material';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertContextProvider = ({ children }) => {
  const [alertData, setAlertData] = useState({
    displayAlert: false,
    severity: 'error',
    message: 'Something went wrong',
    variant: 'outlined',
    timeout: 2000,
  });

  function handleAlertData(data) {
    setAlertData((prev) => ({ ...prev, ...data }));
  }

  useEffect(() => {
    if (alertData.displayAlert === true && alertData.timeout) {
      setTimeout(() => {
        handleAlertData({ displayAlert: false });
      }, alertData.timeout);
    }
  }, [alertData]);

  const alert = alertData.displayAlert && (
    <Alert
      sx={{ my: 2 }}
      variant={alertData.variant}
      severity={alertData.severity}
    >
      {alertData.message}
    </Alert>
  );

  return (
    <AlertContext.Provider value={[alert, handleAlertData]}>
      {children}
    </AlertContext.Provider>
  );
};
