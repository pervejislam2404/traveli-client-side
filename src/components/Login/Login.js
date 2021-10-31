import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import myBanner from './banner.svg';
import logo from './google.png'

const Login = () => {
    const history= useHistory()
    const location = useLocation()

    const redirectURL = location.state?.from || '/home';

    const {setIsLoading,signWithGoogle,setUser,setError}= UseAuth() 


    const handleGoogleSingIn = ()=> {
        setIsLoading(true);
        signWithGoogle()
        .then((result) => {                
            const user = result.user;
            history.push(redirectURL);
            setUser(user);
            setIsLoading(false)
           
        }).catch((error) => {            
            const errorMessage = error.message;          
            setError(errorMessage);
        })
        .finally(()=>setIsLoading(false))
        
    } 
    return (
        <div>
            <div className="w-75 mx-auto rounded row">
               <div className="col-6">
                   <img className="img-fluid" src={myBanner} alt="" />
               </div>
               <div className="col-6 d-flex justify-content-center align-items-center">
                  
                  <span onClick={handleGoogleSingIn} className="row dark-blue text-white p-3 rounded shadow-lg">
                      <img height="50" width="20" src={logo} alt="" className="col-4" />
                      <h5 className="col-8 pt-2">Google Login</h5>
                  </span>
               </div>
            </div>
        </div>
    );
};

export default Login;