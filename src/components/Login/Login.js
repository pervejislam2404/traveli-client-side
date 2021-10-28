import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';

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
            <Button onClick={handleGoogleSingIn}>google</Button>
        </div>
    );
};

export default Login;