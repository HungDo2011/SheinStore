import classNames from 'classnames/bind';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import styles from './GuidForm.module.scss';

const cx = classNames.bind(styles);

function GuidForm({ guid }) {
    const [hasImg, setHasImg] = useState(true);

    useLayoutEffect(() => {
        if (guid.infoBody.img === undefined || null || '') {
            setHasImg(false);
        } else {
            setHasImg(true);
        }
    }, [guid.infoBody.img]);

    return (
        <Container bsPrefix={cx('container-fluid-1200', 'wrapper')}>
            <Row style={{ marginTop: 20, marginBottom: 20 }}>
                <div aria-label="breadcrumb">
                    <ul className={cx('breadcrumb', 'S-breadcrumb')}>
                        <li className={cx('breadcrumb-item', 'S-breadcrumb-item')}>
                            <Link to={'/'}>
                                <span className={cx('S-breadcrumb-link')}>Home</span>
                            </Link>
                        </li>
                        <li className={cx('S-active', 'breadcrumb-item')} aria-current="page">
                            {guid.title}
                        </li>
                    </ul>
                </div>
            </Row>
            <Row>
                <h1 className={cx('page-title')}>{guid.title}</h1>
            </Row>
            <Row style={{ marginBottom: 60 }}>
                <>
                    {(
                        <h1 className={cx('head-title', `text-align-${guid.infoHead.type}`)}>{guid.infoHead.title}</h1>
                    ) ?? <></>}
                </>
                <>{<p className={cx('head-content')}>{guid.infoHead.content}</p> ?? <></>}</>
            </Row>
            <Container>
                <Row style={{ marginBottom: 60 }}>
                    <>
                        {guid.infoBody.title !== '' ? (
                            <h1 className={cx('body-title')}>{guid.infoBody.title}</h1>
                        ) : (
                            <></>
                        )}
                    </>
                    <Col md={hasImg ? 6 : 12} style={{ padding: '40px 0' }}>
                        {guid.infoBody.content.map((item, index) => {
                            return (
                                <div key={index} className={cx('content-item')}>
                                    <p className={cx('content-head')}>{item.head}</p>
                                    {item.body.map((e, i) => {
                                        return (
                                            <p key={i} className={cx('content-body')}>
                                                {i + 1}. {e}
                                            </p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </Col>

                    {hasImg ? (
                        <Col md={6} style={{ padding: '40px 0' }}>
                            <img alt="Example" src={guid.infoBody.img} className={cx('body-img')} />
                        </Col>
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
            {<></> ?? (
                <Row>
                    <h1 className={cx('foot-title')}>{guid.infoFoot.title}</h1>
                    <Row>
                        {guid.infoFoot.content.map((item, index) => {
                            return (
                                <div key={index} className={cx('foot-item')}>
                                    <h1 className={cx('foot-item-head')}>{item.head}</h1>
                                    {item.body.map((e, i) => {
                                        return (
                                            <p key={i} className={cx('foot-item-body')}>
                                                - {e}
                                            </p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </Row>
                </Row>
            )}
        </Container>
    );
}

export default GuidForm;
