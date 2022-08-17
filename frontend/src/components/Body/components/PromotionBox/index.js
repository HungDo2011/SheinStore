import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import styles from './PromoBox.module.scss';
import images from 'assets/images';
import config from 'config';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

const cx = classNames.bind(styles);

const skeletonStyle = {
    width: '100%',
    transformOrigin: 0,
    transform: 'none',
};

function PromoBox({ type }) {
    const [loading, setLoading] = useState(true);
    const [srcImg, setSrcImg] = useState('');

    useEffect(() => {
        // eslint-disable-next-line
        images.promoBody.filter((item) => {
            if (item.page === type) {
                setSrcImg(item.link);
            }
        });
        // eslint-disable-next-line
        setLoading(false);
    }, [type]);

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <>
                    <Skeleton animation="wave" height="60" sx={skeletonStyle} />
                    <Skeleton animation="wave" height="585" sx={skeletonStyle} />
                    <Skeleton animation="wave" height="160" sx={skeletonStyle} />
                </>
            ) : (
                <>
                    <Row className={cx('header')}>
                        <Col xs={4} className={cx('head-item')}>
                            <Link to={`${config.routesConfig.guid}/Use-the-coupon-code`} classNames={cx('head-link')}>
                                <img className={cx('head-img')} src={images.firstPromoHead} alt="Promotion" />
                            </Link>
                        </Col>
                        <Col xs={4} className={cx('head-item')}>
                            <Link to={`${config.routesConfig.guid}/Payment-on-delivery`} classNames={cx('head-link')}>
                                <img className={cx('head-img')} src={images.secondPromoHead} alt="Promotion" />
                            </Link>
                        </Col>
                        <Col xs={4} className={cx('head-item')}>
                            <Link to={`${config.routesConfig.guid}/Delivery-information`} classNames={cx('head-link')}>
                                <img className={cx('head-img')} src={images.thirdPromoHead} alt="Promotion" />
                            </Link>
                        </Col>
                    </Row>

                    <div className={cx('body')}>
                        <Link className={cx('body-link')} to={`/${type}-products`}>
                            <img className={cx('body-img')} alt="Promotion" src={srcImg} />
                        </Link>
                    </div>

                    <Row className={cx('footer')}>
                        <img className={cx('footer-img')} alt="Promotion" src={images.promoFooter} />
                    </Row>
                </>
            )}
        </div>
    );
}

export default PromoBox;
