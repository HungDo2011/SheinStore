import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './PopperCart.module.scss';
import images from 'assets/images';
import config from 'config';
import ButtonQuantityGroup from 'components/Button/ButtonQuantityGroup/ButtonQuantityGroup';
import { cartItemsSelector, cartItemsTotalPaySelector } from 'redux/Cart/cartSelector';

const cx = classNames.bind(styles);

function PopperCart() {
    const cartList = useSelector(cartItemsSelector);

    const totalBill = useSelector(cartItemsTotalPaySelector);

    return cartList.length > 0 ? (
        <div className={cx('cart')}>
            {cartList.map((item) => (
                <Link to={`/product/${item.product.code_SKU}`} key={item.id}>
                    <div className={cx('has-product')}>
                        <img src={item.product.img} alt={item.product.name} className={cx('product-img')} />
                        <div className={cx('product-info')}>
                            <h5 className={cx('product-name')}>{item.product.name}</h5>
                            <ButtonQuantityGroup item={item} popper />
                        </div>
                    </div>
                </Link>
            ))}

            <div className={cx('pay-box')}>
                <p className={cx('total-price')}>
                    Tổng cổng: <span>{totalBill}₫</span>
                </p>
                <Link to={config.routesConfig.cart}>
                    <button className={cx('btn-view-bag')}>xem giỏ hàng</button>
                </Link>
            </div>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <img className={cx('cart-img')} src={images.emtyCart} alt="Bạn chưa chọn sản phẩm nào!" />
            <p className={cx('cart-content')}>Giỏ hàng rỗng</p>
        </div>
    );
}

export default PopperCart;
