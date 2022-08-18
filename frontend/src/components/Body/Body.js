import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Body.module.scss';
import { publicRoutes } from 'routes/routes';
import EventBox from './components/EventBox';
import FlashSale from './components/FlashSale';
import HotZone from './components/HotZone';
import PromoBox from './components/PromotionBox';
import ButtonSubmit from 'components/ButtonSubmit';

const cx = classNames.bind(styles);

function Body({ data, type }) {
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        // eslint-disable-next-line
        publicRoutes.filter((item) => {
            if (item.type === type) {
                setCode(item.code);
                setTitle(item.type);
            }
        });

        window.scrollTo(0, 0);
    }, [type]);

    return (
        <div className={cx('wrapper')}>
            <PromoBox data={data} type={title} />
            <FlashSale data={data} type={code} />
            <HotZone />
            <EventBox data={data} type={code} />
            <p style={{ margin: '50px 0', height: 40 }}>
                <Link
                    to={`/${type}-products`}
                    style={{ textDecoration: 'none', float: 'right', width: '12%', padding: '0 20px' }}
                >
                    <ButtonSubmit value="Xem tất cả >>" show size="btn-non-boder" />
                </Link>
            </p>
        </div>
    );
}

export default Body;
