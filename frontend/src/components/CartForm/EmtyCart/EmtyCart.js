import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import styles from './EmtyCart.module.scss';
import images from 'assets/images';
import config from 'config';
import ButtonSubmit from 'components/Button/ButtonSubmit/ButtonSubmit';
import { memo } from 'react';

const cx = classNames.bind(styles);

function EmtyCart() {
    return (
        <Container bsPrefix={cx('container-fluid-1200', 'wrapper')} style={{ paddingBottom: 30 }}>
            <div className={cx('emty-box')}>
                <img src={images.emtyCart} alt="Emty Cart" className={cx('emty-img')} />
                <p className={cx('cart-title')}>giỏ hàng của bạn trống</p>
                <div style={{ paddingBottom: 50 }}>
                    <Link to={config.routesConfig.womenProducts}>
                        <ButtonSubmit show value="xem thêm" color="btn-black" size="btn-350" />
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default memo(EmtyCart);
