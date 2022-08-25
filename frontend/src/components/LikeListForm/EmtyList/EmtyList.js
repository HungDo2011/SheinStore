import classNames from 'classnames/bind';
import { Row } from 'react-bootstrap';

import styles from './EmtyList.module.scss';

const cx = classNames.bind(styles);

function EmtyList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('emty-cart-content')}>
                <p>Hiện bạn không có gì được lưu vào Danh sách mong muốn của bạn.</p>
                <p>Sử dụng danh sách mong muốn để cá nhân hóa trải nghiệm mua sắm của bạn.</p>
            </div>
        </div>
    );
}

export default EmtyList;
