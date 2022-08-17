import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from 'assets/images';
import styles from './Logo.module.scss';
import config from 'config';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('logo')}>
            <Link to={config.routesConfig.root} className={cx('home-link')}>
                <img className={cx('logo-img')} src={images.logo} alt="Shein" />
            </Link>
        </div>
    );
}

export default Logo;
