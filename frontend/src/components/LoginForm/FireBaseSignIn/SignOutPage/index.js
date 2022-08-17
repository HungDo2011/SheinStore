import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function SignOutPage() {
    return (
        <div>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
    );
}

export default SignOutPage;
