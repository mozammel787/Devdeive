import { createContext, useEffect } from "react";
import {
  EmailAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [lading, setLading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const registration = (email, password) => {
    setLading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const passwordChange = async (currentPassword,newPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setMessage('Password changed successfully.');
    } catch (error) {
      console.log(error);
      handleErrors(error);
    }
  };
  // error handle 
  const handleErrors = (error) => {
        setMessage(`Error: ${error.message}`);
    }

console.log(user,message);

  // logout 
  const logOut = () => {
    return signOut(auth).then(() => setUser(null));
  };

  // get user 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLading(false);
      } else {
        setLading(false);
      }
    });
    return () => unsubscribe();
  }, []);


  const userInfo = {
    googleLogin,
    gitHubLogIn,
    registration,
    logIn,
    user,
    lading,
    logOut,
    setLading,
    passwordChange
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
