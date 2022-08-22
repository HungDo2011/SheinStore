import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './ButtonSubmit.module.scss';
import { addToCart } from 'redux/Cart/cartSlice';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, hoverItem, cart, color, size, value, data }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: data.id,
                product: { ...data },
                quantity: 1,
            }),
        );
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
