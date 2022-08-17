import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../PopperMenu/PopperMenu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link className={cx('item-link')} to={data.link}>
            {data.title}
        </Link>
    );
}

export default MenuItem;
