import classNames from 'classnames/bind';
import ButtonQuantityGroup from 'components/Button/ButtonQuantityGroup/ButtonQuantityGroup';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductSearchItem.module.scss';

const cx = classNames.bind(styles);

function ProductSearchItem({ item, cart }) {
    return (
        <Link to={`/product/${item.code_SKU}`} className={cx('wrapper')}>
            <img src={item.img} alt={item.name} className={cx('product-img')} />
            <div className={cx('product-info')}>
                <h5 className={cx('product-name')}>{item.name}</h5>
                {cart ? (
                    <>
                        <ButtonQuantityGroup product={item} cart />
                    </>
                ) : (
                    <p className={cx('product-code')}>{`${item.type}${item.code_SKU}`}</p>
                )}
            </div>
        </Link>
    );
}

export default ProductSearchItem;
