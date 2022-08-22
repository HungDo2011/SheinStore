import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Badge } from 'react-bootstrap';

import styles from './WidgetMenu.module.scss';
import { widgetMenu } from 'Data/MenuData';
import PopperMenu from 'components/Popper/PopperMenu';

const cx = classNames.bind(styles);

function WidgetMenu() {
    return (
        <div className={cx('widget-menu')}>
            {widgetMenu.map((item, index) => {
                let CompIcon = item.icon;

                if (item.name === 'cart') {
                }

                // if (item.name === 'like') {
                //     item.amount = cardList.length;
                // }

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
                            {(
                                <Badge style={{ fontSize: '8px' }} pill bg="secondary">
                                    {item.amount}
                                </Badge>
                            ) ?? <></>}
                        </Link>
                    </PopperMenu>
                );
            })}
        </div>
    );
}

export default WidgetMenu;
