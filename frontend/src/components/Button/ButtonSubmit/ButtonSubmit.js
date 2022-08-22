import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './ButtonSubmit.module.scss';
import { addToCart } from 'redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, hoverItem, cart, color, size, value, data }) {
    const handleAddToCart = () => {
        console.log(data);
        dispatch(
            addToCart({
                id: data.id,
                product: { ...data },
                quantity: 1,
            }),
        );
    };

    const dispatch = useDispatch();

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
