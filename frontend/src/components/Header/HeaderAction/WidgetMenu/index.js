import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

import styles from './WidgetMenu.module.scss';
import { widgetMenu } from 'Data/MenuData';
import PopperMenu from 'components/Popper/PopperMenu';
import { cartItemsCountSelector } from 'redux/Cart/cartSelector';
import { likeListSelector } from 'redux/LikeList/likeListSelector';

const cx = classNames.bind(styles);

const styleBadge = {
    fontSize: 10,
    position: 'absolute',
    top: 20,
    right: 6,
    zIndex: 10,
};

function WidgetMenu() {
    const quantityInCart = useSelector(cartItemsCountSelector);

    return (
        <div className={cx('widget-menu')}>
            {widgetMenu.map((item, index) => {
                let CompIcon = item.icon;

                if (item.name === 'cart') {
                    item.amount = quantityInCart;
                }

                if (item.name === 'like') {
                    item.amount = likeListSelector.length;
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
                            {(
                                <Badge style={styleBadge} pill bg="secondary">
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
