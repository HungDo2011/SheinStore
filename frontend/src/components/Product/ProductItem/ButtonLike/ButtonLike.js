import { useState } from 'react';
import classNames from 'classnames/bind';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './ButtonLike.module.scss';

const cx = classNames.bind(styles);

function ButtonLike({ data, right, left, style }) {
    const [show, setShow] = useState(true);
    // const [likeList, setLikeList] = useState([]);

    const handleClickLike = (e) => {
        setShow(!show);
        e.preventDefault();
    };

    return (
        <>
            <button onClick={handleClickLike} className={cx('btn-like', right && 'right', left && 'left')}>
                <span className={cx('unlike-icon', show && 'show')}>
                    <FavoriteBorderIcon style={style} />
                </span>
                <span className={cx('liked-icon', !show && 'show')}>
                    <FavoriteIcon style={style} />
                </span>
            </button>
        </>
    );
}

export default ButtonLike;
