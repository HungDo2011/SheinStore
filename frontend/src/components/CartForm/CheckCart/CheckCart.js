import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux/';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import styles from './CheckCart.module.scss';
import { cartListSelector } from 'redux/selectors';
import { increaseOne, decreaseOne, setQuantityInCart } from 'redux/actions';
import ButtonSize from 'components/ButtonSize';

const cx = classNames.bind(styles);

function CheckCart() {
    const cartList = useSelector(cartListSelector);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [value, setValue] = useState(quantity);

    useEffect(() => {
        cartList.map((item) => {
            setValue(item.quantityInCart);
        });
    }, [cartList]);
    console.log(value);

    const handleChangeValue = (e, index) => {
        setQuantity(e.target.value);

        dispatch(setQuantityInCart(quantity, index));
    };

    useLayoutEffect(() => {
        if (value < 0) {
            setValue(0);
        }
    });

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
                            <h1 className={cx('header-title')}>Tóm Tắt Mặt Hàng({cartList.length})</h1>
                            <div className={cx('cart-table')}>
                                <ul className={cx('table-row')}>
                                    <li className={cx('table-item')}>Hình ảnh</li>

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

                    {cartList.map((product, index) => {
                        const price = product.promotional_price > 0 ? product.promotional_price : product.price;
                        let totalPrice = (price * value * 1000).toString().split('');

                        totalPrice.splice(-3, 0, '.');
                        totalPrice = totalPrice.join('');

                        return (
                            <Row
                                key={product._id}
                                style={{
                                    padding: ' 20px 24px',
                                    backgroundColor: 'var(--white)',
                                    borderBottom: '1px solid #e5e5e5',
                                }}
                            >
                                <Col md={2}>
                                    <Link to={`/product/${product.code_SKU}`}>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </Link>
                                </Col>
                                <Col md={10} style={{ paddingLeft: 12 }}>
                                    <Link to={`/product/${product.code_SKU}`}>
                                        <h1 className={cx('product-name')}>{product.name}</h1>
                                    </Link>
                                    <div className={cx('product-group-price')}>
                                        <ButtonSize cartPage />
                                        <p className={cx('product-price')}>{price}₫</p>
                                        <div className={cx('product-quantity')}>
                                            <button
                                                className={cx('product-quantity-btn-left')}
                                                onClick={() => {
                                                    setValue(value - 1);
                                                    dispatch(decreaseOne(index));
                                                }}
                                            >
                                                -
                                            </button>
                                            <input
                                                onChange={(e) => handleChangeValue(e, index)}
                                                value={value}
                                                className={cx('product-quantity-input')}
                                            />
                                            <button
                                                className={cx('product-quantity-btn-right')}
                                                onClick={() => {
                                                    setValue(value + 1);
                                                    dispatch(increaseOne(index));
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className={cx('product-price')}>{totalPrice}₫</div>
                                    </div>
                                </Col>
                            </Row>
                        );
                    })}
                </Col>
                <Col md={4}>me</Col>
            </Row>
        </Container>
    );
}

export default CheckCart;
