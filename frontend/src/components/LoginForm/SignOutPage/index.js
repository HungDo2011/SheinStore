import classNames from 'classnames/bind';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Container } from 'react-bootstrap';

import styles from './SignOutPage.module.scss';

const cx = classNames.bind(styles);

function SignOutPage() {
    return (
        <Container bsPrefix="container-fluid-1200" style={{ marginTop: 150 }}>
            <p className={cx('title')}>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <p className={cx('title')}>Enjoy Shopping!</p>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </Container>
    );
}

export default SignOutPage;
