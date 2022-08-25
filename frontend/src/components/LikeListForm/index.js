import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import styles from './LikeListForm.module.scss';
import EmtyList from './EmtyList/EmtyList';
import ListItem from 'components/Product/ProductList/ListItem/ListItem';
import LikeList from './LikeList/LikeList';
import { likeListSelector } from 'redux/LikeList/likeListSelector';

const cx = classNames.bind(styles);

function LikeListForm({ data, type }) {
    const likeList = useSelector(likeListSelector);

    return (
        <Container bsPrefix={cx('container-1280')} style={{ marginTop: 50 }}>
            <Row>
                <div aria-label="breadcrumb">
                    <ul className={cx('breadcrumb', 'S-breadcrumb')}>
                        <li className={cx('breadcrumb-item', 'S-breadcrumb-item')}>
                            <Link to={'/'}>
                                <span className={cx('S-breadcrumb-link')}>Home</span>
                            </Link>
                        </li>
                        <li className={cx('S-active', 'breadcrumb-item')} aria-current="page">
                            Danh sách mong ước
                        </li>
                    </ul>
                </div>
            </Row>

            <Row style={{ textAlign: 'center', padding: '0 10px 30px' }}>
                <h3 className={cx('header-title')}>
                    danh sách của tôi {likeList.length > 0 ? `(${likeList.length})` : ''}
                </h3>

                <LikeList />
            </Row>

            <Row style={{ margin: '60px 0 20px', paddingLeft: '5px', textAlign: 'left' }}>
                <h1 className={cx('footer-title')}>hãy bắt đầu nào</h1>
                <p className={cx('footer-content')}>
                    Những phong cách bán chạy nhất là vé của bạn đến các bài viết nóng nhất bao giờ hết. Để mua hay
                    không mua?
                </p>
            </Row>

            <Row>
                <ListItem data={data} type={type} lengthRule="12" />
            </Row>

            <Row>
                <button className={cx('see-more')}>xem thêm</button>
            </Row>
        </Container>
    );
}

export default LikeListForm;
