import classNames from 'classnames/bind';
import { Row } from 'react-bootstrap';

import styles from './Header.module.scss';
import images from 'assets/images';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import HeaderAction from './HeaderAction';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(true);
            } else {
                // if scroll up show the navbar
                setShow(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
        // eslint-disable-next-line
    }, [lastScrollY]);

    return (
        <header className={cx('wrapper', show && 'hidden', 'active')}>
            <div className={cx('banner')}>
                <img className={cx('banner-img')} alt="Miến phí vận chuyển" src={images.banner} />
            </div>
            <Row>
                <div className={cx('nav-bar')}>
                    <HeaderMenu />
                    <Logo />
                    <HeaderAction />
                </div>
            </Row>
        </header>
    );
}

export default Header;
