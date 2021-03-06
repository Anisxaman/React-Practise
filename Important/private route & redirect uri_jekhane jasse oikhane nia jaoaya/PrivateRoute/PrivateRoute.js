import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    console.log(children);
  
        let auth = UseAuth();



        return (
          <Route
            {...rest}
            render={({ location }) =>
              auth.user.email ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
      

  
};

export default PrivateRoute;