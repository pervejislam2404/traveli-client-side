import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import mySpinner from './spinner.png'
import UseAuth from '../Context/UseAuth';


const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = UseAuth() 
   
    if(isLoading){
      return (
        <div className="w-50 mx-auto text-center">
            <img src={mySpinner} alt="" />
        </div>
        )
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