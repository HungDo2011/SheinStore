import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

import styles from './ButtonRemove.module.scss';
import { removeProduct } from 'redux/Cart/cartSlice';

const cx = classNames.bind(styles);

function ButtonRemove({ item, popper }) {
    const dispatch = useDispatch();

    const handleRemoveProduct = (e) => {
        e.preventDefault();
        dispatch(removeProduct(item.id));
    };

    return (
        <span className={cx('button-remove', popper && 'btn-remove-popper')} onClick={(e) => handleRemoveProduct(e)}>
            <DeleteOutlineTwoToneIcon sx={{ fontSize: 14 }} />
        </span>
    );
}

export default ButtonRemove;
