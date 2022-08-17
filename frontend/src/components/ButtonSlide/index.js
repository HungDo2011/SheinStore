import classNames from 'classnames/bind';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import styles from './ButtonSlide.module.scss';

const cx = classNames.bind(styles);

const styleIcon = {
    fontSize: 10,
    color: '#333',
};

function ButtonSlide({ left, right, onClick }) {
    return (
        <button className={cx('btn-slice', left && 'btn-left', right && 'btn-right')} onClick={onClick}>
            {left && <ArrowBackIosNewIcon sx={styleIcon} />}
            {right && <ArrowForwardIosIcon sx={styleIcon} />}
        </button>
    );
}

export default ButtonSlide;
