import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import styles from './CheckCart.module.scss';
import images from 'assets/images';
import ButtonSubmit from 'components/Button/ButtonSubmit/ButtonSubmit';
import ProductInCart from 'components/Product/ProductInCart/ProductInCart';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartItemsSelector, cartItemsTotalPaySelector } from 'redux/Cart/cartSelector';

const cx = classNames.bind(styles);

const styleCol = {
    padding: '0 5px',
    marginBottom: 30,
};

function CheckCart() {
    const cartList = useSelector(cartItemsSelector);
    const totalProduct = useSelector(cartItemsCountSelector);
    const totalBill = useSelector(cartItemsTotalPaySelector);

    console.log('cart: ', cartList);

    return (
        <Container bsPrefix={cx('container-fluid-1200', 'wrapper')} style={{ padding: '0 10px 30px' }}>
            <div className={cx('process-status-bar')}>
                <span className={cx('active')}>Giỏ hàng</span>
                <span>Đặt hàng</span>
                <span>Thanh toán</span>
                <span>Hoàn thành đơn hàng</span>
            </div>

            <Row>
                <Col md={8} style={styleCol}>
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
                            <LocalShippingOutlinedIcon style={{ marginRight: 8, fontSize: 24 }} />
                            <div>
                                <h1 className={cx('title')}>Phí vận chuyển</h1>
                                <p className={cx('discription')}>
                                    <strong>giao hàng tiêu chuẩn</strong> MIỄN PHÍ !
                                </p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className={cx('cartlist-header')}>
                            <h1 className={cx('header-title')}>
                                Tóm Tắt Mặt Hàng <span style={{ color: '#c44a01' }}>{`( ${totalProduct} )`}</span>
                            </h1>
                            <div className={cx('cart-table')}>
                                <ul className={cx('table-row')}>
                                    <li className={cx('table-item')}>Tất cả</li>
                                    <li className={cx('table-item')}>Sản phẩm</li>
                                    <li className={cx('table-item')}>Giá</li>
                                    <li className={cx('table-item')}>Số lượng </li>
                                    <li className={cx('table-item')}>Tổng cộng</li>
                                </ul>
                            </div>
                        </div>
                    </Row>

                    <Row style={{ padding: ' 20px 24px', backgroundColor: 'var(--white)', marginBottom: '10px' }}>
                        <div className={cx('promo-box')}>
                            <div className={cx('promo-banner')}>
                                <h1 className={cx('promo-title')}>Mua thêm hàng giảm thêm giá</h1>
                                <p className={cx('promo-discription')}>
                                    Chi tiêu 899.000₫ để đủ điều kiện giảm giá, hiện tại bạn cần thêm 610.000₫ để đủ
                                    điều kiện.
                                </p>
                            </div>
                        </div>
                    </Row>

                    {cartList.map((product) => (
                        <ProductInCart item={product} />
                    ))}
                </Col>
                <Col md={4} style={styleCol}>
                    <div className={cx('payment')}>
                        <h4 className={cx('total-title')}>Tóm tắt Đơn hàng</h4>
                        <div className={cx('price-box')}>
                            <p className={cx('total-price-title')}>Tổng tiền thanh toán: </p>
                            <p className={cx('total-price')}>
                                {totalBill.toLocaleString()}
                                <span>₫</span>
                            </p>
                        </div>
                        <div className={cx('check-btn')}>
                            <ButtonSubmit value="thanh toán" show color="btn-black" size="btn-large" />
                            <p className={cx('point-tip')}>Dùng mã giảm giá, Điểm SHEIN trong bước tiếp theo</p>
                        </div>
                    </div>

                    <div className={cx('accept-bank')}>
                        <h1 className={cx('accept-title')}>chúng tôi chấp nhận</h1>
                        <div className={cx('bank-img')}>
                            <img src={images.payMentAE} alt="Bank Accept" />
                            <img src={images.payMentCOD} alt="Bank Accept" />
                            <img src={images.payMentVISA} alt="Bank Accept" />
                            <img src={images.payMentPayPal} alt="Bank Accept" />
                            <img src={images.payMentJCB} alt="Bank Accept" />
                            <img src={images.payMentMaestro} alt="Bank Accept" />
                            <img src={images.payMentMC} alt="Bank Accept" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckCart;
