import classNames from 'classnames/bind';
import styles from './HeaderAction.module.scss';

import HeaderSearch from './HeaderSearch';
import WidgetMenu from './WidgetMenu';

const cx = classNames.bind(styles);

function HeaderAction() {
    return (
        <div className={cx('wrapper')}>
            <HeaderSearch />
            <WidgetMenu />
        </div>
    );
}

export default HeaderAction;
