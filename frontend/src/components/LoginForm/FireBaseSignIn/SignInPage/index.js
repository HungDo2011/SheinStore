import classNames from 'classnames/bind';
import { Container, Row } from 'react-bootstrap';

import styles from './SignInPage.module.scss';
import LogInItem from './LogInItem';

const cx = classNames.bind(styles);

function SignInPage({ isSignedIn }) {
    return (
        <Container bsPrefix="container-fluid-1200">
            <Row>
                <div className={cx('wrapper')}>
                    <div className={cx('login-container')}>
                        <LogInItem data={isSignedIn} login />
                        <div className={cx('login-line')}></div>
                        <LogInItem />
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default SignInPage;
