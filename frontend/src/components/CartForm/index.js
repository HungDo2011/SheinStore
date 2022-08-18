import classNames from 'classnames/bind';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { useSelector } from 'react-redux/';

import styles from './CartForm.module.scss';
import EmtyCart from './EmtyCart/EmtyCart';
import ButtonSlide from 'components/ButtonSlide';
import ProductItem from 'components/Product/ProductItem';
import CheckCart from './CheckCart/CheckCart';
import { cartListSelector } from 'redux/selectors';

const cx = classNames.bind(styles);

function CartForm({ data }) {
    const cartList = useSelector(cartListSelector);

    return (
        <>
            <div style={{ backgroundColor: '#f7f8fa' }}>{cartList.length === 0 ? <EmtyCart /> : <CheckCart />}</div>
            <Container bsPrefix={cx('container-1280', 'wrapper')} style={{ marginTop: 50 }}>
                <h1 className={cx('list-title')}>có thể bạn muốn thêm vào giỏ hàng</h1>
                <Row>
                    <Slider
                        pauseOnHover
                        speed={800}
                        slidesToShow={5}
                        slidesToScroll={6}
                        nextArrow={<ButtonSlide right onClick />}
                        prevArrow={<ButtonSlide left onClick />}
                    >
                        {/* eslint-disable-next-line */}
                        {data.map((item) => {
                            return (
                                <Col key={item.id} className={cx('item')}>
                                    <ProductItem data={item} />
                                </Col>
                            );
                        })}
                    </Slider>
                </Row>
            </Container>
        </>
    );
}

export default CartForm;
