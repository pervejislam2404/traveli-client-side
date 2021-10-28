import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import UseAuth from '../Context/UseAuth';


const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = UseAuth() 
   
    if(isLoading){
      return <Spinner className="mx-auto mt-5 pt-5" animation="grow" />
    }
    return (
      <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
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