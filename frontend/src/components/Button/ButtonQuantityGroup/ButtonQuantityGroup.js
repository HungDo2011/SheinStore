import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useLayoutEffect, useState } from 'react';

import styles from './ButtonQuantityGroup.module.scss';
import { increasOne, decreaseOne, setQuantity } from 'redux/Cart/cartSlice';
import ButtonRemove from '../ButtonRemove/ButtonRemove';

const cx = classNames.bind(styles);

function ButtonQuantityGroup({ item, popper }) {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();

    const price = item.product.promotional_price > 0 ? item.product.promotional_price : item.product.price;

    let totalPrice = (price * value * 1000).toString().split('');

    totalPrice.splice(-3, 0, '.');
    totalPrice = totalPrice.join('');

    useLayoutEffect(() => {
        setValue(item.quantity);

        if (value < 0) {
            setValue(0);
        }
    }, [item.quantity, value]);

    const handleChangeValue = (e) => {
        setValue(e.target.value);
        dispatch(setQuantity(item.id, value));
    };

    return (
        <div className={cx('wrapper', !popper && 'flex')}>
            {popper ? (
                <p className={cx('popper-price')}>
                    Giá sản phẩm: <span>{price}₫</span>
                </p>
            ) : (
                <p className={cx('product-price')}>{price}₫</p>
            )}
            <div className={cx('product-quantity', popper && 'popper-quantity-height')}>
                <button
                    className={cx('product-quantity-btn-left')}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(decreaseOne(item.id));
                    }}
                >
                    -
                </button>

                <input
                    value={value}
                    onChange={handleChangeValue}
                    className={cx('product-quantity-input')}
                    disabled={popper}
                />

                <button
                    className={cx('product-quantity-btn-right')}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(increasOne(item.id));
                    }}
                >
                    +
                </button>
            </div>

            {popper ? (
                <p className={cx('popper-price')}>
                    Tổng cộng <span>{totalPrice}₫</span>
                    <ButtonRemove item={item} popper />
                </p>
            ) : (
                <p className={cx('product-price')}>{totalPrice}₫</p>
            )}
        </div>
    );
}

export default ButtonQuantityGroup;
