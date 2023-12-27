import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import auth from '../../firebase.config';



export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();



    const LoginWithGooglePopup = () => {
        setLoading(true);

        return signInWithPopup(auth, googleprovider);

    }

    const LoginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const RegisterWithEmail = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const LogOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            if (currentuser) {
                setLoading(false)
                setUser(currentuser)
            }
            else {
                setUser(null)
            }

        })


        return () => {
            unsubscribe();
        }
    }, [])




















    const Shareobj = {
        user,
        loading,
        LoginWithEmail,
        RegisterWithEmail,
        LoginWithGooglePopup,
        LogOut

    }






    return (
        <AuthContext.Provider value={Shareobj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider