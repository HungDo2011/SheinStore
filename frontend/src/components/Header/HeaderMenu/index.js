import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { menuHeaderRoutes } from 'routes/routes';

import styles from './HeaderMenu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu() {
    return (
        <div className={cx('header-menu')}>
            {menuHeaderRoutes.map((route, index) => {
                return (
                    <NavLink key={index} to={route.path} className={cx('item-link')}>
                        {route.title}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default HeaderMenu;
