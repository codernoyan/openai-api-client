/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
  signInWithEmailAndPassword, signInWithPopup, signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    loading,
    setLoading,
    googleAuth,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
}
