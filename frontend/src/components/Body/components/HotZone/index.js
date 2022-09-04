import classNames from 'classnames/bind';
import styles from './HotZone.module.scss';
import images from 'assets/images';
import { memo } from 'react';

const cx = classNames.bind(styles);

function HotZone() {
    return (
        <div className={cx('wrapper')}>
            <img alt="Hot Zone" src={images.hotZoneHead} className={cx('head')} />
            <img alt="Hot Zone" src={images.hotZoneDown} className={cx('foot')} />
        </div>
    );
}

export default memo(HotZone);
