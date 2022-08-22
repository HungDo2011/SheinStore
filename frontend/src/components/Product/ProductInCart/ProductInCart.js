import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import styles from './ProductInCart.module.scss';
import ButtonSize from 'components/Button/ButtonSize';
import ButtonLike from 'components/Button/ButtonLike/ButtonLike';
import ButtonQuantityGroup from 'components/Button/ButtonQuantityGroup/ButtonQuantityGroup';
import ButtonRemove from 'components/Button/ButtonRemove/ButtonRemove';

const cx = classNames.bind(styles);

function ProductInCart({ item }) {
    const product = item.product;

    return (
        <div key={item.id}>
            <Row
                style={{
                    height: '290px',
                    padding: ' 20px 24px',
                    backgroundColor: 'var(--white)',
                    borderBottom: '1px solid #e5e5e5',
                }}
            >
                <Col md={3} style={{ height: '100%' }}>
                    <Link to={`/product/${product.code_SKU}`}>
                        <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%' }} />
                    </Link>
                </Col>
                <Col md={9} style={{ paddingLeft: 12, height: '100%' }}>
                    <Link to={`/product/${product.code_SKU}`}>
                        <h1 className={cx('product-name')}>{product.name}</h1>
                    </Link>
                    <Row style={{ margin: '50px 0' }}>
                        <ButtonQuantityGroup item={item} />
                    </Row>
                    <div className={cx('product-group-price')}>
                        <ButtonSize cartPage />
                        <div className={cx('button-like')}>
                            <ButtonLike value="Lưu lại sau" style={{ fontSize: 24 }} />
                        </div>
                        <ButtonRemove item={item} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductInCart;
