// Import FirebaseAuth and firebase;
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import SignInPage from './SignInPage';
import SignOutPage from './SignOutPage';

// Configure FirebaseUI.

function FireBaseSignIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [isSignedIn]);

    if (!isSignedIn) {
        return <SignInPage isSignedIn={isSignedIn} />;
    }

    return <SignOutPage />;
}

export default FireBaseSignIn;
