import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as v4uuid } from 'uuid';

import styles from './ButtonSubmit.module.scss';
import { addToCart, increaseOne } from 'redux/actions';
import { cartListSelector } from 'redux/selectors';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, hoverItem, color, size, value, data }) {
    const cartList = useSelector(cartListSelector);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (cartList.length === 0) {
            return dispatch(
                addToCart({
                    _id: v4uuid(),
                    quantityInCart: 1,
                    ...data,
                }),
            );
        } else {
            cartList.map((product) => {
                if (data.id === product.id) {
                    return dispatch(increaseOne(product.id));
                }
            });
        }
        console.log(cartList);
    };

    return (
        <button
            className={cx('btn-add-item', show && 'show', hoverItem && 'hover-item', color, size)}
            onClick={handleAddToCart}
        >
            {value}
        </button>
    );
}

export default ButtonSubmit;
