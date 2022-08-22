import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './CartForm.module.scss';
import EmtyCart from './EmtyCart/EmtyCart';
import CheckCart from './CheckCart/CheckCart';
import ButtonSlide from 'components/Button/ButtonSlide';
import ProductItem from 'components/Product/ProductItem';
import { cartItemsCountSelector } from 'redux/Cart/cartSelector';

const cx = classNames.bind(styles);

function CartForm({ data }) {
    const quantityInCart = useSelector(cartItemsCountSelector) === 0;

    return (
        <>
            <div style={{ backgroundColor: '#f7f8fa' }}>{quantityInCart ? <EmtyCart /> : <CheckCart />}</div>
            <Container bsPrefix={cx('container-1280', 'wrapper')} style={{ marginTop: 50 }}>
                <h1 className={cx('list-title')}>
                    {quantityInCart ? 'có thể bạn muốn thêm vào giỏ hàng' : 'có thể bạn cũng thích'}
                </h1>
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
