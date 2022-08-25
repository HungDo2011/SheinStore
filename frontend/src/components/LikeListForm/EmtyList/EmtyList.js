import classNames from 'classnames/bind';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './EmtyList.module.scss';

const cx = classNames.bind(styles);

const farvoriteIconStyle = {
    marginRight: '8px',
    fontSize: '18px',
};

function EmtyList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('emty-list-content')}>
                <p>Hiện bạn không có gì được lưu vào Danh sách mong muốn của bạn.</p>
                <p>Sử dụng danh sách mong muốn để cá nhân hóa trải nghiệm mua sắm của bạn.</p>
            </div>

            <div className={cx('emty-list-guide')}>
                <div className={cx('guide-title')}>
                    <h1>Trái tim nó.</h1>
                    <p>Lưu trữ mọi thứ bạn yêu thích trên một trang</p>
                </div>
                <div className={cx('guide-content')}>
                    <p>
                        <FavoriteIcon style={farvoriteIconStyle} />
                        <span>Hãy suy nghĩ về nó trước khi mua nó.</span>
                    </p>
                    <p>
                        <FavoriteIcon style={farvoriteIconStyle} />
                        <span>Nhận thông báo về việc hết hàng.</span>
                    </p>
                </div>
                <div className={cx('guide-img')}>
                    <img src="https://sheinsz.ltwebstatic.com/she_dist/images/wishlist-guide-fc5c0e8568.gif" />
                </div>
            </div>
        </div>
    );
}

export default EmtyList;
