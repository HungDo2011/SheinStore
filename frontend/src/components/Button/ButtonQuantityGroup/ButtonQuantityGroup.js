import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState } from 'react';

import styles from './ButtonQuantityGroup.module.scss';

const cx = classNames.bind(styles);

function ButtonQuantityGroup({ product, popper }) {
    const [flag, setFlag] = useState(false);

    const [value, setValue] = useState(1);

    const price = product.promotional_price > 0 ? product.promotional_price : product.price;

    let totalPrice = (price * value * 1000).toString().split('');

    totalPrice.splice(-3, 0, '.');
    totalPrice = totalPrice.join('');

    useLayoutEffect(() => {
        if (value < 0) {
            setValue(0);
        }
    });

    return (
        <>
            {popper ? (
                <p className={cx('popper-price')}>
                    Giá sản phẩm: <span>{price}₫</span>
                </p>
            ) : (
                <p className={cx('product-price')}>{price}₫</p>
            )}
            <div className={cx('product-quantity')}>
                <button
                    className={cx('product-quantity-btn-left')}
                    onClick={() => {
                        setFlag(!flag);
                    }}
                >
                    -
                </button>
                <input value={value} className={cx('product-quantity-input')} disabled={popper} />
                <button
                    className={cx('product-quantity-btn-right')}
                    onClick={() => {
                        setFlag(!flag);
                    }}
                >
                    +
                </button>
            </div>

            {popper ? (
                <p className={cx('popper-price')}>
                    Tổng cộng <span>{totalPrice}₫</span>{' '}
                </p>
            ) : (
                <p className={cx('product-price')}>{totalPrice}₫</p>
            )}
        </>
    );
}

export default ButtonQuantityGroup;
