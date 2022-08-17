import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';

import { CONECT_ITEM, MENU_FOOTER_DATA, PAY_MENT_DATA } from 'Data/FooterData';
import styles from './Footer.module.scss';
import GuestEmail from './GuestEmail/GuestEmail';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Container bsPrefix={cx('container')}>
                <Row>
                    <div className={cx('list', 'left')}>
                        {MENU_FOOTER_DATA.map((item, index) => {
                            return (
                                <Col xl={4} key={index} className={cx('item')}>
                                    <h6 className={cx('title')}>{item.head}</h6>
                                    <div className={cx('content')}>
                                        {item.child.map((e, i) => (
                                            <Link className={cx('link')} to={e.link} key={i}>
                                                {e.title}
                                            </Link>
                                        ))}
                                    </div>
                                </Col>
                            );
                        })}
                    </div>
                    <div className={cx('connect-form', 'right')}>
                        <Row>
                            <Col xs={8} className={cx('item')}>
                                <h6 className={cx('title')}>kết nối với chúng tôi</h6>
                                <div className={cx('connect-list')}>
                                    {CONECT_ITEM.map((item, index) => (
                                        <li className={cx('connect-item')} key={index}>
                                            <a href={item.link} className={cx('connect-link')}>
                                                <img src={item.icon} alt={item.name} className={cx('connect-icon')} />
                                            </a>
                                        </li>
                                    ))}
                                </div>
                            </Col>
                            <Col xl={4} className={cx('item')}>
                                <h6 className={cx('title')}>app</h6>
                                <div className={cx('connect-list')}>
                                    <li className={cx('connect-item')}>
                                        <a
                                            href="https://apps.apple.com/us/app/yub-streetwear-fashion-shopping/id878577184"
                                            className={cx('connect-link')}
                                        >
                                            <AppleIcon sx={{ color: '#000', fontSize: 30 }} />
                                        </a>
                                    </li>
                                    <li className={cx('connect-item')}>
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.zzkko&hl=en"
                                            className={cx('connect-link')}
                                        >
                                            <AdbIcon sx={{ color: '#000', fontSize: 30 }} />
                                        </a>
                                    </li>
                                </div>
                            </Col>
                        </Row>
                        <GuestEmail />
                        <Row>
                            <Col className={cx('mt-30')}>
                                <h6 className={cx('title')}>chúng tôi chấp nhận</h6>
                                <ul className={cx('list')}>
                                    {PAY_MENT_DATA.map((element, index) => (
                                        <li className={cx('payment-item')} key={index}>
                                            <img className={cx('payment-icon')} src={element.img} alt={element.name} />
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
