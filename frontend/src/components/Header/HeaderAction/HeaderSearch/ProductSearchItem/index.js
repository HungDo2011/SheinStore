import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ProductSearchItem.module.scss';

const cx = classNames.bind(styles);

function ProductSearchItem({ item }) {
    return (
        <Link to={`/@${item.code_SKU}`} className={cx('wrapper')}>
            <img src={item.img} alt={item.name} className={cx('product-img')} />
            <div className={cx('product-info')}>
                <h5 className={cx('product-name')}>{item.name}</h5>
                <p className={cx('product-code')}>{`${item.type}${item.code_SKU}`}</p>
            </div>
        </Link>
    );
}

export default ProductSearchItem;
