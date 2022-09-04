import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';

import styles from './LogInItem.module.scss';
import { loginUser } from 'redux/ApiRequest/ApiRequest';
import { testEmail, testPassword, verifyPassword } from 'Validator';

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
        if (
            valueEmail !== '' &&
            testEmail(valueEmail) &&
            valuePassword !== '' &&
            testPassword(valuePassword) &&
            valueRePassword !== '' &&
            verifyPassword(valuePassword, valueRePassword)
        ) {
            console.log(valueEmail);
            console.log(valuePassword);
        }
    };

    return (
        <div className={cx('login-item')}>
            <h4 className={cx('login-title')}>{login ? 'đăng nhập' : 'mới đến shein'}</h4>
            <Form>
                <Form.Group bsPrefix={cx('input-group')}>
                    {login ? (
                        <></>
                    ) : (
                        <div className={cx('input-arena')}>
                            <Form.Label className={cx('label')}>Tên người dùng</Form.Label>
                            <Form.Control
                                value={valueUserName}
                                onChange={(e) => {
                                    setValueUserName(e.target.value);
                                }}
                                bsPrefix={cx('control')}
                                type="text"
                            />
                            {errUserName ? <span className={cx('err-mess')}>đã tồn tại tên người dùng</span> : <></>}
                        </div>
                    )}

                    <div className={cx('input-arena')}>
                        <Form.Label className={cx('label')}>Địa Chỉ Email</Form.Label>
                        <Form.Control
                            value={valueEmail}
                            onBlur={handleBlurEmail}
                            onChange={(e) => {
                                setValueEmail(e.target.value);
                            }}
                            bsPrefix={cx('control')}
                            type="email"
                        />
                        {errEmail ? (
                            <span className={cx('err-mess')}>
                                Email bạn đã nhập không hợp lệ. Vui lòng kiểm tra email của bạn và thử lại.
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className={cx('input-arena')}>
                        <Form.Label bsPrefix={cx('label')}>Mật Khẩu</Form.Label>
                        <Form.Control
                            value={valuePassword}
                            onBlur={handleBlurPassword}
                            onChange={(e) => {
                                setValuePassword(e.target.value);
                            }}
                            bsPrefix={cx('control')}
                            type="password"
                        />
                        {errPassword ? <span className={cx('err-mess')}>Tối thiểu 8 ký tự</span> : <></>}
                    </div>

                    {login ? (
                        <></>
                    ) : (
                        <>
                            <div className={cx('input-arena')}>
                                <Form.Label bsPrefix={cx('label')}>Xác Nhận Mật Khẩu</Form.Label>
                                <Form.Control
                                    bsPrefix={cx('control')}
                                    value={valueRePassword}
                                    onChange={(e) => setValueRePassword(e.target.value)}
                                    onBlur={handleBlurRePassword}
                                    type="password"
                                />
                                {errRePassword ? (
                                    <span className={cx('err-mess')}>
                                        Mật khẩu của bạn không khớp, vui lòng thử lại.
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div className={cx('login-style')}>
                                <h6 className={cx('title')}>Sở thích</h6>
                                <div className={cx('login-style-list')}>
                                    <Row>
                                        <Col bsPrefix={cx('login-style-item')}>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Thời Trang Nữ</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Plus Size</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Hàng gia dụng</span>
                                            </label>
                                        </Col>
                                        <Col bsPrefix={cx('login-style-item')}>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Thời Trang Nam</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Thời Trang Trẻ Em</span>
                                            </label>
                                            <label className={cx('item-label')}>
                                                <input type="checkbox" />
                                                <i className={cx('checkmark')}></i>
                                                <span>Đồ Dùng Thú Cưng</span>
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
                                đăng nhập
                            </Button>
                            <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                <Link to="/fogot-password" className={cx('btn-foget')}>
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Button onClick={handleSubmitRegister} bsPrefix={cx('btn-submit')} variant="dark">
                            đăng ký
                        </Button>
                    )}
                </Form.Group>
            </Form>

            {login ? (
                <>
                    {/* <div className={cx('login-other')}>
                        <div className={cx('border-text')}>
                            <p>Hoặc</p>
                        </div>
                        <StyledFirebaseAuth />
                        <p style={{ textAlign: 'center' }}>Chưa hỗ trợ</p>
                    </div> */}

                    <p className={cx('privacy-item')}>
                        Bằng cách đăng nhập vào tài khoản của bạn, bạn đồng ý với{' '}
                        <a
                            className={cx('privacy-link')}
                            href="https://www.shein.com.vn/Privacy-Security-Policy-a-282.html"
                        >
                            Chính sách bảo mật {'&'} Cookie
                        </a>{' '}
                        và{' '}
                        <a
                            className={cx('privacy-link')}
                            href="https://www.shein.com.vn/Terms-and-Conditions-a-399.html"
                        >
                            Điều khoản và Điều kiện
                        </a>{' '}
                        của chúng tôi.
                    </p>
                </>
            ) : (
                <></>
            )}

            <h5 className={cx('discount-info')}>
                {login ? 'đăng nhập để nhận thêm ưu đãi' : 'Giảm thêm 15% cho đơn hàng đầu tiên'}
            </h5>
        </div>
    );
}

export default LogInItem;
