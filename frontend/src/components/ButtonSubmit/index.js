import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { v4 as v4uuid } from 'uuid';

import styles from './ButtonSubmit.module.scss';
import { addToCart } from 'redux/actions';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, hoverItem, color, size, value, data }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                _id: v4uuid(),
                ...data,
            }),
        );
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
