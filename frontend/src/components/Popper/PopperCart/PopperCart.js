import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './PopperCart.module.scss';
import { cartListSelector, totalPaySelector } from 'redux/selectors';
import ProductSearchItem from 'components/Header/HeaderAction/HeaderSearch/ProductSearchItem';
import ButtonSubmit from 'components/Button/ButtonSubmit/ButtonSubmit';
import images from 'assets/images';
import config from 'config';

const cx = classNames.bind(styles);

function PopperCart() {
    const cartList = useSelector(cartListSelector);

    return cartList.length > 0 ? (
        <div className={cx('cart')}>
            {cartList.map((item) => (
                <Link to={`/product/${item.code_SKU}`} key={item.id}>
                    <ProductSearchItem item={item} key={item.id} cart />
                </Link>
            ))}

            <Link to={config.routesConfig.cart}>
                <ButtonSubmit show value="xem giỏ hàng" cart color="btn-black" />
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
