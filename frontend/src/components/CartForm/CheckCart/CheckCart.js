import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import styles from './CheckCart.module.scss';
import { cartListSelector } from 'redux/selectors';

const cx = classNames.bind(styles);

function CheckCart() {
    const cartList = useSelector(cartListSelector);

    return (
        <Container bsPrefix={cx('container-fluid-1200', 'wrapper')} style={{ paddingBottom: 30 }}>
            <div className={cx('process-status-bar')}>
                <span className={cx('active')}>Giỏ hàng</span>
                <span>Đặt hàng</span>
                <span>Thanh toán</span>
                <span>Hoàn thành đơn hàng</span>
            </div>

            <Row>
                <Col md={8}>
                    <Row bsPrefix={cx('address-card')}>
                        <Col md={8}>
                            <p className={'addresss'}>
                                <RoomOutlinedIcon sx={{ fontSize: '24px', padding: '0 2px' }} />
                                Vận chuyển đên Việt Nam
                            </p>
                        </Col>
                        <Col md={4}>
                            <p className={cx('choose-address')}>Option</p>
                        </Col>
                    </Row>
                    <Row bsPrefix={cx('top-shipping-sec')}>
                        <div className={cx('shipping-sec')}>
                            <LocalShippingOutlinedIcon />
                            <div>
                                <h1>Phí vận chuyển</h1>
                                <p>giao hàng tiêu chuẩn MIỄN PHÍ !</p>
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>me</Col>
            </Row>
        </Container>
    );
}

export default CheckCart;
