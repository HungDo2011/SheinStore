import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from './ProductList.module.scss';
import images from 'assets/images';
import ListItem from './ListItem/ListItem';

const cx = classNames.bind(styles);

function ProductList({ data, type }) {
    const [link, setLink] = useState('');
    const [srcImg, setSrcImg] = useState('');

    useEffect(() => {
        // eslint-disable-next-line
        images.promoBody.map((item) => {
            if (item.page === type) {
                setSrcImg(item.link);
                setLink(type);
            }
        });

        if (type === 'women') {
            setLink('');
        }

        window.scrollTo(0, 0);
    }, [srcImg, type]);

    return (
        <Container>
            <div className={cx('wrapper')}>
                <div aria-label="breadcrumb">
                    <ul className={cx('breadcrumb', 'S-breadcrumb')}>
                        <li className={cx('breadcrumb-item', 'S-breadcrumb-item')}>
                            <Link to={`/${link}`}>
                                <span className={cx('S-breadcrumb-link')}>Home</span>
                            </Link>
                        </li>
                        <li className={cx('S-active', 'breadcrumb-item')} aria-current="page">
                            SHEIN trang phục {type}
                        </li>
                    </ul>
                </div>
                <div className={cx('banner')}>
                    <img className={cx('banner-img')} src={srcImg} alt="Banner Product" />
                </div>
                <h2 className={cx('product-list-title')}> Thời Trang {type}</h2>
                <ListItem data={data} type={type} lengthRule={data.length} />
            </div>
        </Container>
    );
}

export default ProductList;
