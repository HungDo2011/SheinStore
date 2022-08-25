import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import styles from './LikeListForm.module.scss';
import EmtyList from './EmtyList/EmtyList';

const cx = classNames.bind(styles);

function LikeListForm() {
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
                <h3 className={cx('title')}>danh sách của tôi</h3>

                <EmtyList />
            </Row>
        </Container>
    );
}

export default LikeListForm;
