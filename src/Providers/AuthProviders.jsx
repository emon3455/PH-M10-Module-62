import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false);
            setUser(currentUser);
        })

        return ()=>{
            unsubcribe();
        }

    },[])

    const authInfo ={

        user,
        createUser,
        signIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;