import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app) 


const ContextProvider = ({children}) => {

    const [user,setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()
    
const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)
}

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const updateUserData = (profile) =>{
    return updateProfile(auth.currentUser, profile)
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

const info = {user,googleLogin,userLogout,createUser,loginUser,updateUserData}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;