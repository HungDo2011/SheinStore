import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import styles from './ProductInCart.module.scss';
import ButtonSize from 'components/Button/ButtonSize';
import ButtonLike from 'components/Product/ProductItem/ButtonLike/ButtonLike';
import ButtonQuantityGroup from 'components/Button/ButtonQuantityGroup/ButtonQuantityGroup';

const cx = classNames.bind(styles);

function ProductInCart({ product }) {
    return (
        <div key={product.id}>
            <Row
                style={{
                    padding: ' 20px 24px',
                    backgroundColor: 'var(--white)',
                    borderBottom: '1px solid #e5e5e5',
                }}
            >
                <Col md={4}>
                    <Link to={`/product/${product.code_SKU}`}>
                        <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%' }} />
                    </Link>
                </Col>
                <Col md={8} style={{ paddingLeft: 12 }}>
                    <Link to={`/product/${product.code_SKU}`}>
                        <h1 className={cx('product-name')}>{product.name}</h1>
                    </Link>
                    <div className={cx('product-group-price')}>
                        <ButtonSize cartPage />
                        <ButtonQuantityGroup product={product} />
                    </div>

                    <div
                        style={{
                            display: 'inline-flex',
                            margin: '50px 20px 20px',
                            alignItems: 'center',
                        }}
                    >
                        <ButtonLike value="Lưu lại sau" style={{ fontSize: 24 }} />
                        <p style={{ marginLeft: 4 }}>Lưu lại sau</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductInCart;
