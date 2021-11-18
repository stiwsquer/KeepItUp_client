import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const [user] = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (roles.includes(user.role)) {
          return <Component {...rest} {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/404',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
