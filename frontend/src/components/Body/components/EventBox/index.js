import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import styles from './EventBox.module.scss';
import images from 'assets/images';
import ProductItem from 'components/Product/ProductItem';
import ButtonSlide from 'components/ButtonSlide';

const cx = classNames.bind(styles);

function EventBox({ data, type }) {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('box-title')}>#dailyprops</h1>
            <img src={images.eventBox} alt="Event Box" className={cx('box-img')} />
            <Row>
                <Slider
                    dots
                    pauseOnHover
                    speed={800}
                    slidesToShow={6}
                    slidesToScroll={6}
                    nextArrow={<ButtonSlide right onClick />}
                    prevArrow={<ButtonSlide left onClick />}
                >
                    {/* eslint-disable-next-line */}
                    {data.map((item) => {
                        if (type.includes(item.type) && item.promotional_price === '0') {
                            return (
                                <Col key={item.id} className={cx('item')}>
                                    <ProductItem data={item} />
                                </Col>
                            );
                        }
                    })}
                </Slider>
            </Row>
        </div>
    );
}

export default EventBox;
