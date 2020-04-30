import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth.jsx';

const PrivateRoute = ({ component: Component, ...args }) => {
  return (
    <Route
      {...args}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  )
}

export default PrivateRoute;