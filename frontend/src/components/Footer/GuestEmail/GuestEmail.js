import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import styles from './GuestEmail.module.scss';
import { testEmail } from 'Validator';

const cx = classNames.bind(styles);

const err = {
    marginTop: 6,
    color: '#d53333',
    fontSize: 12,
};

const success = {
    marginTop: 6,
    color: '#28a745',
    fontSize: 12,
};

function GuestEmail() {
    const [errMess, setErrMess] = useState('');
    const [errMessStyle, setErrMessStyle] = useState(err);
    const [valueInput, setValueInput] = useState('');
    const [show, setShow] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const inputRef = useRef(null);

    const handleSubmit = () => {
        const checkEmail = testEmail(valueInput);

        setShow(!show);
        setAnchorEl(inputRef.current);
        setErrMessStyle(err);

        if (valueInput === '') {
            setErrMess('Vui lòng nhập một địa chỉ email!');
        } else if (!checkEmail && valueInput !== '') {
            setErrMess('Email không hợp lệ!');
        } else {
            setErrMessStyle(success);
            setErrMess('Cảm ơn bạn đã đăng ký! Hãy thưởng thức mua sắm tại SHEIN.');
        }
        console.log(valueInput);
    };

    return (
        <Row>
            <Col>
                <h6 className={cx('title')}>đăng ký nhận tin từ shein</h6>
                <InputGroup>
                    <Form.Control
                        bsPrefix={cx('guest-input')}
                        type="email"
                        placeholder="Địa chỉ email của bạn"
                        ref={inputRef}
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                    />

                    <Button bsPrefix={cx('btn-submit')} type="submit" variant="dark" onClick={handleSubmit}>
                        đăng ký
                    </Button>
                    <Popover
                        open={show}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={() => {
                            setAnchorEl(null);
                            setShow(false);
                        }}
                        bsPrefix={cx('email')}
                    >
                        <Typography style={errMessStyle}>{errMess}</Typography>
                    </Popover>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default GuestEmail;
