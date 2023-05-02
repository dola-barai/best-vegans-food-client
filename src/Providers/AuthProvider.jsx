import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const user = null

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signPopUpGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signPopUpGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo ={
        user,
        createUser,
        signInUser,
        signPopUpGoogle,
        signPopUpGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;