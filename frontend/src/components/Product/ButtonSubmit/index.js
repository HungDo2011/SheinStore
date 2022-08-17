import classNames from 'classnames/bind';

import styles from './ButtonSubmit.module.scss';

const cx = classNames.bind(styles);

function ButtonSubmit({ show, onAddItem, hoverItem, color, size, value }) {
    return (
        <button
            className={cx('btn-add-item', show && 'show', hoverItem && 'hover-item', color, size)}
            onClick={onAddItem}
        >
            {value}
        </button>
    );
}

export default ButtonSubmit;
