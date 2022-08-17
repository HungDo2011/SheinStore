import classNames from 'classnames/bind';

import styles from './ProductThumbnail.module.scss';

const cx = classNames.bind(styles);

function ProductThumbnail({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('thumbnail')} alt={data.name} src={data.img} />
        </div>
    );
}

export default ProductThumbnail;
