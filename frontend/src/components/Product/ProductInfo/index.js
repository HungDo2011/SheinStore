import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import styles from './ProductInfo.module.scss';
import images from 'assets/images';
import { publicRoutes } from 'routes/routes';
import ProductThumbnail from './ProductThumbnail';
import Product from './Product';
import ButtonSubmit from 'components/ButtonSubmit';
import ListItem from '../ProductList/ListItem/ListItem';

const cx = classNames.bind(styles);

function ProductInfo({ data }) {
    const [itemName, setItemName] = useState('');
    const [type, setType] = useState('');
    const [link, setLink] = useState('');
    const [code, setCode] = useState('');
    const [product, setProduct] = useState({});

    let local = useLocation();

    // eslint-disable-next-line
    useEffect(() => {
        setCode(local.pathname.replace('/product/', ''));
        if (type === 'women') {
            setLink('/');
        } else {
            setLink(`/${type}-products`);
        }
    });

    useEffect(() => {
        // eslint-disable-next-line
        data.filter((item) => {
            if (item.code_SKU === code) {
                setProduct(item);
                setItemName(item.name);
                // eslint-disable-next-line
                publicRoutes.filter((e) => {
                    if (e.code.includes(item.type)) {
                        setType(e.type);
                    }
                });
            }
        });
        window.scrollTo(0, 0);
    });

    return (
        <Container bsPrefix="container-fluid-1200">
            <Row>
                <div aria-label="breadcrumb">
                    <ul className={cx('breadcrumb', 'S-breadcrumb')}>
                        <li className={cx('breadcrumb-item', 'S-breadcrumb-item')}>
                            <Link to={link}>
                                <span className={cx('S-breadcrumb-link')}>Home</span>
                            </Link>
                        </li>
                        <li className={cx('breadcrumb-item', 'S-breadcrumb-item')}>
                            <Link to={`/${type}-products`}>
                                <span className={cx('S-breadcrumb-link')}>{type} SHEIN</span>
                            </Link>
                        </li>
                        <li className={cx('S-active', 'breadcrumb-item')} aria-current="page">
                            {itemName}
                        </li>
                    </ul>
                </div>
            </Row>
            <Row>
                <Col md={6}>
                    <ProductThumbnail data={product} />
                </Col>
                <Col md={5} style={{ marginLeft: 50 }}>
                    <Product data={product} />
                </Col>
            </Row>
            <Row style={{ position: 'relative', marginTop: 70, paddingTop: 50 }}>
                <h1 style={{ position: 'absolute', top: 0 }}>Khách Hàng Xem Thêm</h1>
                <ListItem data={data} type={type} lengthRule="12" />
            </Row>
            <Row style={{ marginTop: 50 }}>
                <Link to={`/${type}-products`} style={{ textDecoration: 'none' }}>
                    <ButtonSubmit value="Xem thêm" show size="btn-medium" color="btn-black" />
                </Link>
            </Row>
            <Row style={{ marginTop: 70 }}>
                <img src={images.detailImg} alt="detail" style={{ maxWidth: '100%', height: 'auto' }} />
            </Row>
        </Container>
    );
}

export default ProductInfo;
