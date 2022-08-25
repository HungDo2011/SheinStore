import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './ButtonLike.module.scss';
import { toggleLike } from 'redux/LikeList/likeListSlice';
import { likeListSelector } from 'redux/LikeList/likeListSelector';

const cx = classNames.bind(styles);

function ButtonLike({ data, value, right, left, style }) {
    const likeList = useSelector(likeListSelector);

    const [show, setShow] = useState(false);

    useEffect(() => {
        likeList.map((item) => {
            if (item.id === data.id) {
                setShow(item.liked ?? false);
            }
        });
    }, [show]);

    const dispatch = useDispatch();

    const handleLike = (e) => {
        e.preventDefault();
        setShow(!show);
        dispatch(toggleLike(data));
    };

    return (
        <>
            <button onClick={(e) => handleLike(e)} className={cx('btn-like', right && 'right', left && 'left')}>
                <div>
                    {show ? (
                        <span className={cx('liked-icon')}>
                            <FavoriteIcon style={style} />
                        </span>
                    ) : (
                        <span className={cx('unlike-icon')}>
                            <FavoriteBorderIcon style={style} />
                        </span>
                    )}
                </div>
                <p style={{ marginLeft: 4 }}>{value}</p>
            </button>
        </>
    );
}

export default ButtonLike;
