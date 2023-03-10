import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app) 


const ContextProvider = ({children}) => {

    const [user,setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()
    
const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)
}

const userLogout = () =>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=> unsubscribe();
},[])

const info = {user,googleLogin,userLogout}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;