import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // CreateUser
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signOut
  const logOut = () => {
    return signOut(auth);
  };

  // google sign in
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // Update profile
  const updateUserProfile = (name) => {
    const user = {
      displayName: name,
    };
    updateProfile(auth.currentUser, user)
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => console.error(error));
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // AuthInfo
  const authInfo = {
    user,
    loading,
    creatUser,
    signIn,
    logOut,
    googleSignIn,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
