// import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAppInitialize from '../Firebase/Firebase.init';


firebaseAppInitialize()
const googleAuthProvider = new GoogleAuthProvider(); 


const UseFirebase = () => {
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth(); 

    const signWithGoogle = ()=>{
      return signInWithPopup(auth, googleAuthProvider);
    }


    const logOut = ()=> {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            const errorMessage = error.message;
             setError(errorMessage);
        })
        .finally(()=> {
            setIsLoading(false);
        })
        ;
    }


    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])

    return{signWithGoogle,user,setUser,error,setError,isLoading,setIsLoading,logOut}
};

export default UseFirebase;