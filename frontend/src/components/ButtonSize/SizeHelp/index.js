import classNames from 'classnames/bind';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import StraightenIcon from '@mui/icons-material/Straighten';
import CloseIcon from '@mui/icons-material/Close';

import styles from './SizeHelp.module.scss';

const cx = classNames.bind(styles);

const closeIconStyle = {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    lineHeight: 12,
    fontSize: 45,
    color: '#666',
    cursor: 'pointer',
    zIndex: 1,
};

function SizeHelp() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className={cx('size-help')} onClick={handleShow}>
                <StraightenIcon style={{ marginRight: 5, verticalAlign: 'sub', fontSize: 24 }} />
                <span className={cx('help-content')}>Hướng dẫn kích thước</span>
            </div>

            <Modal show={show} onHide={handleClose} contentClassName={cx('size-help-modal')} centered size="lg">
                <Modal.Header bsPrefix={cx('modal-head')}>
                    <CloseIcon style={closeIconStyle} onClick={handleClose} />
                    <Modal.Title as="h1" bsPrefix={cx('modal-title')}>
                        Hướng dẫn kích thước
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={cx('modal-body')}>
                    <h1 className={cx('modal-body-title')}>Kích thước sản phẩm</h1>
                    <Table responsive bordered hover bsPrefix={cx('modal-table', 'table')}>
                        <thead className={cx('thead')}>
                            <tr>
                                <td>Kích Thước</td>
                                <td>Vai</td>
                                <td>Chiều Dài</td>
                                <td>Ngực</td>
                            </tr>
                        </thead>
                        <tbody className={cx('tbody')}>
                            <tr>
                                <td>S</td>
                                <td>40</td>
                                <td>66.5</td>
                                <td>108</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>43</td>
                                <td>68</td>
                                <td>114</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>46</td>
                                <td>69.5</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>49</td>
                                <td>71</td>
                                <td>126</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className={cx('notice')}>
                        *Dữ liệu này có được bằng cách đo thủ công sản phẩm , các phép đo có thể bị thay đổi 1-2 CM.
                    </p>

                    <div className={cx('size-meansure')}>
                        <p className={cx('size-meansure-title')}>Cách đo kích thước của sản phẩm?</p>
                        <div className={cx('size-meansure-detail')}>
                            <div className={cx('size-meansure-discription')}>
                                <div className={cx('size-meansure-discription-item')}>
                                    <h6>
                                        <em className={cx('index-dot')}>1</em>
                                        Vai
                                    </h6>
                                    <p>Đo từ nơi đường nối vai gặp tay áo bên này sang bên kia.</p>
                                </div>
                                <div className={cx('size-meansure-discription-item')}>
                                    <h6>
                                        <em className={cx('index-dot')}>2</em>
                                        Vòng ngực
                                    </h6>
                                    <p>Đo từ các mũi khâu bên dưới nách bên này sang bên kia.</p>
                                </div>
                                <div className={cx('size-meansure-discription-item')}>
                                    <h6>
                                        <em className={cx('index-dot')}>3</em>
                                        Chiều dài
                                    </h6>
                                    <p>Đo từ nơi đường nối vai gặp cổ áo đến gấu áo.</p>
                                </div>
                                <div className={cx('size-meansure-discription-item')}>
                                    <h6>
                                        <em className={cx('index-dot')}>4</em>
                                        Tay áo
                                    </h6>
                                    <p>Đo từ nơi đường nối vai gặp lỗ tay đến cổ tay áo.</p>
                                </div>
                            </div>

                            <div className={cx('size-meansure-picture')}>
                                <img
                                    src="https://img.ltwebstatic.com/images3_pi/2021/12/02/16384444215893aadc1a4d6eff1c35dd32684db8fc.webp"
                                    alt="sizemeasure"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SizeHelp;
