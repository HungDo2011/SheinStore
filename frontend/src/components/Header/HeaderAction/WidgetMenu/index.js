import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './WidgetMenu.module.scss';
import PopperMenu from 'components/Popper/PopperMenu';
import { widgetMenu } from 'Data/MenuData';

const cx = classNames.bind(styles);

function WidgetMenu() {
    return (
        <div className={cx('widget-menu')}>
            {widgetMenu.map((item, index) => {
                let CompIcon = item.icon;
                return (
                    <PopperMenu
                        hideOnClick={false}
                        placement={item.placement}
                        key={index}
                        type={item.name}
                        items={item.data}
                    >
                        <Link to={item.link} className={cx('widget-item')}>
                            <CompIcon sx={{ fontSize: 25, lineHeight: 70 }} />
                            {item.amount ? <span className={cx('badge')}>{item.amount.length}</span> : <></>}
                        </Link>
                    </PopperMenu>
                );
            })}
        </div>
    );
}

export default WidgetMenu;
