import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';

import styles from './LogInItem.module.scss';
import { loginUser } from 'redux/ApiRequest/ApiRequest';
import { testEmail, testPassword, verifyPassword } from 'Validator';
import { userInfo } from 'redux/Auth/authSelector';

const cx = classNames.bind(styles);

function LogInItem({ login = false }) {
    const [valueEmail, setValueEmail] = useState('');
    const [errEmail, setErrEmail] = useState(false);

    const [valueUserName, setValueUserName] = useState('');
    const [errUserName, setErrUserName] = useState(false);

    const [valuePassword, setValuePassword] = useState('');
    const [errPassword, setErrPassword] = useState(false);

    const [valueRePassword, setValueRePassword] = useState('');
    const [errRePassword, setErrRePassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBlurEmail = () => {
        if (valueEmail === '' || testEmail(valueEmail)) {
            setErrEmail(false);
        } else {
            setErrEmail(true);
        }
    };

    const handleBlurPassword = () => {
        if (valuePassword === '' || testPassword(valuePassword)) {
            setErrPassword(false);
        } else {
            setErrPassword(true);
        }
    };

    const handleBlurRePassword = () => {
        if (valueRePassword === '' || verifyPassword(valuePassword, valueRePassword)) {
            setErrRePassword(false);
        } else {
            setErrRePassword(true);
        }
    };

    const handleSubmitLogIn = (e) => {
        e.preventDefault();
        if (valueEmail !== '' && testEmail(valueEmail) && valuePassword !== '' && testPassword(valuePassword)) {
            const newUser = {
                email: valueEmail,
                password: valuePassword,
            };

            loginUser(newUser, dispatch, navigate);
        }
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        // if (
        //     valueEmail !== '' &&
        //     testEmail(valueEmail) &&
        //     valuePassword !== '' &&
        //     testPassword(valuePassword) &&
        //     valueRePassword !== '' &&
        //     verifyPassword(valuePassword, valueRePassword)
        // ) {
        //     console.log(valueEmail);
        //     console.log(valuePassword);
        // }
    };

    return (
        <div className={cx('login-item')}>
            <h4 className={cx('login-title')}>{login ? '????ng nh???p' : 'm???i ?????n shein'}</h4>
            <Form>
                <Form.Group bsPrefix={cx('input-group')}>
                    {login ? (
                        <></>
                    ) : (
                        <div className={cx('input-arena')}>
                            <Form.Label className={cx('label')}>T??n ng?????i d??ng</Form.Label>
                            <Form.Control
                                value={valueUserName}
                                onChange={(e) => setValueUserName(e.target.value)}
                                bsPrefix={cx('control')}
                                type="text"
                            />
                            {errUserName ? <span className={cx('err-mess')}>???? t???n t???i t??n ng?????i d??ng</span> : <></>}
                        </div>
                    )}

                    <div className={cx('input-arena')}>
                        <Form.Label className={cx('label')}>?????a Ch??? Email</Form.Label>
                        <Form.Control
                            value={valueEmail}
                            onBlur={handleBlurEmail}
                            onChange={(e) => setValueEmail(e.target.value)}
                            bsPrefix={cx('control')}
                            type="email"
                        />
                        {errEmail ? (
                            <span className={cx('err-mess')}>
                                Email b???n ???? nh???p kh??ng h???p l???. Vui l??ng ki???m tra email c???a b???n v?? th??? l???i.
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className={cx('input-arena')}>
                        <Form.Label bsPrefix={cx('label')}>M???t Kh???u</Form.Label>
                        <Form.Control
                            value={valuePassword}
                            onBlur={handleBlurPassword}
                            onChange={(e) => setValuePassword(e.target.value)}
                            bsPrefix={cx('control')}
                            type="password"
                        />
                        {errPassword ? <span className={cx('err-mess')}>T???i thi???u 8 k?? t???</span> : <></>}
                    </div>

                    {login ? (
                        <></>
                    ) : (
                        <>
                            <div className={cx('input-arena')}>
                                <Form.Label bsPrefix={cx('label')}>X??c Nh???n M???t Kh???u</Form.Label>
                                <Form.Control
                                    bsPrefix={cx('control')}
                                    value={valueRePassword}
                                    onChange={(e) => setValueRePassword(e.target.value)}
                                    onBlur={handleBlurRePassword}
                                    type="password"
                                />
                                {errRePassword ? (
                                    <span className={cx('err-mess')}>
                                        M???t kh???u c???a b???n kh??ng kh???p, vui l??ng th??? l???i.
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div className={cx('login-style')}>
                                <h6 className={cx('title')}>S??? th??ch</h6>
                                <div className={cx('login-style-list')}>
                                    <Row>
                                        <Col bsPrefix={cx('login-style-item')}>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Th???i Trang N???</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Plus Size</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>H??ng gia d???ng</span>
                                            </label>
                                        </Col>
                                        <Col bsPrefix={cx('login-style-item')}>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Th???i Trang Nam</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Th???i Trang Tr??? Em</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>????? D??ng Th?? C??ng</span>
                                            </label>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </>
                    )}

                    {login ? (
                        <>
                            <Button onClick={handleSubmitLogIn} bsPrefix={cx('btn-submit')} variant="dark">
                                ????ng nh???p
                            </Button>
                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <Link to="/fogot-password" className={cx('btn-foget')}>
                                    Qu??n m???t kh???u?
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Button onClick={handleSubmitRegister} bsPrefix={cx('btn-submit')} variant="dark">
                            ????ng k??
                        </Button>
                    )}
                </Form.Group>
            </Form>

            {login ? (
                <>
                    {/* <div className={cx('login-other')}>
                        <div className={cx('border-text')}>
                            <p>Ho???c</p>
                        </div>
                        <StyledFirebaseAuth />
                        <p style={{ textAlign: 'center' }}>Ch??a h??? tr???</p>
                    </div> */}

                    <p className={cx('privacy-item')}>
                        B???ng c??ch ????ng nh???p v??o t??i kho???n c???a b???n, b???n ?????ng ?? v???i{' '}
                        <a
                            className={cx('privacy-link')}
                            href="https://www.shein.com.vn/Privacy-Security-Policy-a-282.html"
                        >
                            Ch??nh s??ch b???o m???t {'&'} Cookie
                        </a>{' '}
                        v??{' '}
                        <a
                            className={cx('privacy-link')}
                            href="https://www.shein.com.vn/Terms-and-Conditions-a-399.html"
                        >
                            ??i???u kho???n v?? ??i???u ki???n
                        </a>{' '}
                        c???a ch??ng t??i.
                    </p>
                </>
            ) : (
                <></>
            )}

            <h5 className={cx('discount-info')}>
                {login ? '????ng nh???p ????? nh???n th??m ??u ????i' : 'Gi???m th??m 15% cho ????n h??ng ?????u ti??n'}
            </h5>
        </div>
    );
}

export default LogInItem;
