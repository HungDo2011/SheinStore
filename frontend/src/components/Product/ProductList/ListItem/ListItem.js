import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import styles from './ListItem.module.scss';
import ProductItem from 'components/Product/ProductItem';
import { publicRoutes } from 'routes/routes';
import ProductSkeletonItem from 'components/Product/ProductSkeletonItem/ProductSkeletonItem';

const cx = classNames.bind(styles);

function ListItem({ data, type, lengthRule }) {
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line
        publicRoutes.map((item) => {
            if (item.type === type) {
                setCode(item.code);
            }
        });

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [type, lengthRule]);

    return (
        <div className={cx('product-list')}>
            <Row>
                {/* eslint-disable-next-line */}
                {data.map((item, index) => {
                    if (code.includes(item.type) && index < lengthRule) {
                        return (
                            <Col bsPrefix={cx('product-item', 'col-md-3')} key={item.id}>
                                {loading ? <ProductSkeletonItem /> : <ProductItem data={item} hover />}
                            </Col>
                        );
                    }
                })}
            </Row>
        </div>
    );
}

export default ListItem;
