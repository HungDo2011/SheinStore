import classNames from 'classnames/bind';
import Skeleton from '@mui/material/Skeleton';

import styles from './ProductSkeletonItem.module.scss';

const cx = classNames.bind(styles);

function ProductSkeletonItem() {
    return (
        <div className={cx('product-item')}>
            <Skeleton variant="rounded" width={'100%'} height={280} />

            <Skeleton variant="text" sx={{ minHeight: 16, maxWidth: '55%', marginTop: '6px' }} />
            <Skeleton variant="text" sx={{ minHeight: 24, maxWidth: '65%', marginTop: '6px' }} />
        </div>
    );
}

export default ProductSkeletonItem;
