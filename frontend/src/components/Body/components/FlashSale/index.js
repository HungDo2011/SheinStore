import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-slick';

import styles from './FlashSale.module.scss';
import images from 'assets/images';
import CountDown from 'components/CountDown/CountDown';
import ProductItem from 'components/Product/ProductItem';
import ButtonSlide from 'components/ButtonSlide';

const cx = classNames.bind(styles);

function FlashSale({ data, type }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('head-img')} src={images.flashSale} alt="Ưu đãi trong ngày" />
            <Row className={cx('flash-sale')}>
                <Col md={4}>
                    <span className={cx('title')}>Flash Sale</span>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className={cx('count-clock')}>
                    <span className={cx('time-runner')}>kết thúc sau</span>
                    <CountDown size="small" titlePosition="bottom" />
                </Col>
            </Row>
            <Row className={cx('wrapper-slider')}>
                <Slider
                    dots
                    speed={500}
                    slidesToShow={6}
                    slidesToScroll={6}
                    nextArrow={<ButtonSlide right onClick />}
                    prevArrow={<ButtonSlide left onClick />}
                >
                    {/* eslint-disable-next-line */}
                    {data.map((item) => {
                        if (item.promotional_price > 0 && type.includes(item.type)) {
                            return <ProductItem key={item.code_SKU} data={item} />;
                        }
                    })}
                </Slider>
            </Row>
        </div>
    );
}

export default FlashSale;
