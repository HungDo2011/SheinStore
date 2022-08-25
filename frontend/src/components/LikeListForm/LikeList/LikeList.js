import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './LikeList.module.scss';
import { likeListSelector } from 'redux/LikeList/likeListSelector';
import ProductItem from 'components/Product/ProductItem';

const cx = classNames.bind(styles);

function LikeList() {
    const likeList = useSelector(likeListSelector);

    return (
        <Container>
            <Row style={{ marginTop: '30px' }}>
                {likeList.map((item) => (
                    <Col md={3}>
                        <ProductItem data={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LikeList;
