import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import styles from './ProductItem.module.scss';
import ButtonLike from 'components/Button/ButtonLike/ButtonLike';
import ButtonSubmit from 'components/Button/ButtonSubmit/ButtonSubmit';

const cx = classNames.bind(styles);

function ProductItem({ data, hover }) {
    const [show, setShow] = useState(false);

    const salePercent = Math.floor((data.promotional_price / data.price) * 100);

    const mouseHoverItem = () => {
        setShow(true);
    };

    const handleOut = () => {
        setShow(false);
    };

    return (
        <div key={data.id} className={cx('product-item')} onMouseOver={mouseHoverItem} onMouseOut={handleOut}>
            <Link to={`/product/${data.code_SKU}`}>
                {data.promotional_price > 0 && (
                    <span className={cx('product-board')}>
                        <i className={cx('product-icon')}>
                            <FlashOnIcon sx={{ color: '#222', fontSize: '24px' }} />
                        </i>
                        <p className={cx('product-percent')}>-{salePercent}%</p>
                    </span>
                )}
                <img className={cx('product-img', hover && 'max-height')} src={data.img} alt={data.name} />

                <div className={cx('product-price')}>
                    {data.promotional_price > 0 ? (
                        <>
                            <p className={cx('new-price')}>{data.promotional_price}₫</p>
                            <p className={cx('old-price')}>{data.price}₫</p>
                            <ButtonLike right data={data} />
                        </>
                    ) : (
                        <>
                            <p className={cx('price')}>{data.price}₫</p>
                            <ButtonLike right data={data} />
                        </>
                    )}
                </div>

                <p className={cx('product-name')}>{data.name}</p>
                {hover && <ButtonSubmit value="thêm vào giỏ hàng" hoverItem show={show} />}
            </Link>
        </div>
    );
}

export default ProductItem;
