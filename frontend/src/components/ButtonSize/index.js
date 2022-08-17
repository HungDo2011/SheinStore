import classNames from 'classnames/bind';
import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import styles from './ButtonSize.module.scss';

const cx = classNames.bind(styles);

function ButtonSize() {
    const [active, setActive] = useState(false);

    const handleChooseSize = () => {
        setActive(!active);
    };

    const popover = (
        <Popover id="popover-basic" className={cx('info-size')}>
            <Popover.Header as="h3" className={cx('info-size-head')}>
                Phép đo sản phẩm
            </Popover.Header>
            <Popover.Body className={cx('info-size-body')}>
                Vai: <span>42 cm,</span> Chiều dài: <span>36.5 cm,</span> Chiều dài tay: <span>56.3 cm,</span> Ngực:{' '}
                <span>84 cm,</span> Cổ tay áo: <span>19.8 cm,</span>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger={['hover', 'focus']} placement="top-start" overlay={popover}>
            <button className={cx('btn-size', active && 'active')} onClick={handleChooseSize}>
                Một cỡ
            </button>
        </OverlayTrigger>
    );
}

export default ButtonSize;
