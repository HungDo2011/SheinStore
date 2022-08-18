import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux/es/exports';

import styles from './WidgetMenu.module.scss';
import PopperMenu from 'components/Popper/PopperMenu';
import { widgetMenu } from 'Data/MenuData';
import { cartListSelector } from 'redux/selectors';

const cx = classNames.bind(styles);

function WidgetMenu() {
    const cardList = useSelector(cartListSelector);

    return (
        <div className={cx('widget-menu')}>
            {widgetMenu.map((item, index) => {
                let CompIcon = item.icon;

                if (item.name === 'cart') {
                    item.amount = cardList.length;
                }

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
                            {<i className={cx('badge')}>{item.amount}</i> ?? <></>}
                        </Link>
                    </PopperMenu>
                );
            })}
        </div>
    );
}

export default WidgetMenu;
