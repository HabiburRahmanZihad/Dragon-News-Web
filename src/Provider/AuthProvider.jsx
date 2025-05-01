import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [])


    const userInfo = {
        user,
        createUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;