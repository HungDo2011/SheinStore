import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './ButtonSubmit.module.scss';
import { addToCart, increaseOne } from 'redux/actions';
import { cartListSelector } from 'redux/selectors';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, hoverItem, cart, color, size, value, data }) {
    const cartList = useSelector(cartListSelector);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (cartList.length === 0) {
            dispatch(
                addToCart({
                    quantityInCart: 1,
                    ...data,
                }),
            );
        } else if (cartList.length > 0) {
            cartList.map((item) => {
                if (item.id === data.id) {
                    dispatch(increaseOne(data));
                } else if (item.id !== data.id) {
                    dispatch(
                        addToCart({
                            quantityInCart: 1,
                            ...data,
                        }),
                    );
                }
            });
        }
    };

    return (
        <button
            className={cx('btn-add-item', show && 'show', hoverItem && 'hover-item', cart && 'btn-cart', color, size)}
            onClick={handleAddToCart}
        >
            {value}
        </button>
    );
}

export default ButtonSubmit;
