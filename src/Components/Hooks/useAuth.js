import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase;
    const provider = new GoogleAuthProvider();

    const login = () => auth.signInWithPopup(provider);

    useEffect(() => {

    }, [authentication]);

    return { authentication, login}
}