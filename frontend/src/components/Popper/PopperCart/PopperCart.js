import classNames from 'classnames/bind';

import styles from './PopperCart.module.scss';
import images from 'assets/images';
import config from 'config';
import ProductSearchItem from 'components/Header/HeaderAction/HeaderSearch/ProductSearchItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PopperCart() {
    return false ? (
        <div className={cx('cart')}>
            {/* {cartList.map((item) => (
                <Link to={`/product/${item.code_SKU}`} key={item.id}>
                    <ProductSearchItem item={item} key={item.id} cart />
                </Link>
            ))} */}

            <Link to={config.routesConfig.cart}>
                <button className={cx('btn-mini-cart')} show value="xem giỏ hàng" color="btn-black">
                    xem giỏ hàng
                </button>
            </Link>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <img className={cx('cart-img')} src={images.emtyCart} alt="Bạn chưa chọn sản phẩm nào!" />
            <p className={cx('cart-content')}>Giỏ hàng rỗng</p>
        </div>
    );
}

export default PopperCart;
