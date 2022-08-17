import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, type = false }) {
    const classes = cx('wrapper', {
        [type]: type,
    });

    return <div className={classes}>{children}</div>;
}

export default PopperWrapper;
