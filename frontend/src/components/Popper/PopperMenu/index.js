import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { PopperWrapper } from 'components/Popper';
import styles from './PopperMenu.module.scss';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PopperMenu({ children, items = [], type, placement, hideOnClick }) {
    const renderItem = () => {
        //User Popper
        if (type === 'user') {
            return (
                //Using a wrapper <div> or <span> tag around
                // the reference element solves this by creating a new parentNode context.
                <div>
                    <HeadlessTippy
                        interactive
                        hideOnClick={hideOnClick}
                        placement={placement}
                        render={(attrs) => (
                            <PopperWrapper className={cx(type)} tabIndex="-1" {...attrs} type={type}>
                                {items.map((item, index) => (
                                    <MenuItem key={index} data={item} />
                                ))}
                            </PopperWrapper>
                        )}
                    >
                        {children}
                    </HeadlessTippy>
                </div>
            );
        }

        //Cart Popper
        if (type === 'cart') {
            return (
                //Using a wrapper <div> or <span> tag around
                // the reference element solves this by creating a new parentNode context.
                <div>
                    <HeadlessTippy
                        interactive
                        placement={placement}
                        hideOnClick={hideOnClick}
                        render={(attrs) => (
                            <PopperWrapper className={cx({ type })} tabIndex="-1" {...attrs} type={type}>
                                {items.map((item, index) => (
                                    <div key={index}>
                                        <img alt="No Product" className={cx('cart-img')} src={item.img} />
                                        <p className={cx('cart-content')}>{item.content}</p>
                                    </div>
                                ))}
                            </PopperWrapper>
                        )}
                    >
                        {children}
                    </HeadlessTippy>
                </div>
            );
        }

        // Like Popper
        if (type === 'like') {
            return <>{children}</>;
        }

        // Advise Popper
        if (type === 'advise') {
            return (
                //Using a wrapper <div> or <span> tag around
                // the reference element solves this by creating a new parentNode context.

                <div>
                    <HeadlessTippy
                        interactive
                        placement={placement}
                        hideOnClick={hideOnClick}
                        render={(attrs) => (
                            <PopperWrapper className={cx({ type })} tabIndex="-1" {...attrs} type={type}>
                                {items.map((item, index) => {
                                    let Compt = item.icon;
                                    return (
                                        <Link to={item.link} key={index} className={cx('advise-item')}>
                                            <i className={cx('advise-icon')}>
                                                <Compt sx={{ fontSize: 16, fontWeight: 400 }} />
                                            </i>
                                            <h4 className={cx('advise-content')}>{item.content}</h4>
                                        </Link>
                                    );
                                })}
                            </PopperWrapper>
                        )}
                    >
                        {children}
                    </HeadlessTippy>
                </div>
            );
        }

        // Currency Popper
        if (type === 'currency') {
            return (
                //Using a wrapper <div> or <span> tag around
                // the reference element solves this by creating a new parentNode context.

                <div>
                    <HeadlessTippy
                        interactive
                        placement={placement}
                        hideOnClick={false}
                        render={(attrs) => (
                            <PopperWrapper className={cx({ type })} tabIndex="-1" {...attrs} type={type}>
                                {items.map((item, index) => {
                                    return (
                                        <div className={cx('currency-item')} key={index}>
                                            <h4 className={cx('currency-title')}>{item.title}</h4>
                                            <select hidden={false} className={cx('currency-select')}>
                                                {item.options.map((e, i) => {
                                                    return (
                                                        <option value={i} className={cx('currency-option')} key={i}>
                                                            {e}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    );
                                })}
                            </PopperWrapper>
                        )}
                    >
                        {children}
                    </HeadlessTippy>
                </div>
            );
        }
    };

    return <>{renderItem()}</>;
}

export default PopperMenu;
