import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';

export default function LandingRoute() {
  //   const [refresh, setRefresh] = useState(true);
  //   const refreshPage = () => {
  //     if (refresh) {
  //       setRefresh(false);
  //       window.location.reload();
  //     }
  //   };

  //   refreshPage();
  return (
    <Route exact path="/">
      <LandingPage />
    </Route>
  );
}
