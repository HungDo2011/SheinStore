import classNames from 'classnames/bind';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

import styles from './Product.module.scss';
import ButtonSubmit from 'components/Product/ButtonSubmit';
import ButtonLike from 'components/Product/ProductItem/ButtonLike/ButtonLike';
import CountDown from 'components/CountDown/CountDown';
import ButtonSize from 'components/ButtonSize';
import SizeHelp from 'components/ButtonSize/SizeHelp';

const cx = classNames.bind(styles);

const styleIconShipping = { fontSize: 24, color: '#198055' };

function Product({ data }) {
    const salePercent = Math.floor((data.promotional_price / data.price) * 100);

    const saleThrifty = data.price * 1000 - data.promotional_price * 1000;

    let result = saleThrifty.toString().split('');

    result.splice(-3, 0, '.');
    result = result.join('');

    return (
        <div className={cx('product-container')}>
            <div className={cx('product-info')}>
                <h1 className={cx('product-name')}>{data.name}</h1>
                <p className={cx('product-code')}>
                    SKU: {data.type}
                    {data.code_SKU}
                </p>
                {data.promotional_price > 0 ? (
                    <>
                        <div className={cx('product-price-group')}>
                            <FlashOnIcon sx={{ fontSize: 24, color: '#facf19' }} />
                            <span className={cx('sale-price')}>{data.promotional_price}₫</span>
                            <span className={cx('original-price')}>{data.price}₫</span>
                        </div>
                        <div className={cx('flashsale-diff')}>
                            <span className={cx('flashsale-thrifty')}>Tiêt kiệm: {result}₫</span>
                            <span className={cx('sale-percent')}>-{salePercent ?? '-'}%</span>
                        </div>
                        <div className={cx('count-down-box')}>
                            <span className={'box-title'}>
                                <FlashOnIcon /> Flash Sale
                            </span>
                            <span className={cx('box-timer')}>
                                kết thúc sau
                                <span className={cx('count-down-clock')}>
                                    <CountDown size="extra-small" theme="light" />
                                </span>
                            </span>
                        </div>
                    </>
                ) : (
                    <div className={cx('product-price-group')}>
                        <span className={cx('price')}>{data.price}₫</span>
                    </div>
                )}
            </div>

            <div className={cx('product-select')}>
                <div className={cx('select-size')}>
                    <h1 className={cx('size-title')}>Kích thước</h1>
                    <div className={cx('size-choose')}>
                        <ButtonSize />
                        <ButtonSize />
                        <ButtonSize />
                    </div>
                </div>

                <SizeHelp />
            </div>

            <div className={cx('product-add')}>
                <div className={cx('btn-submit')}>
                    <ButtonSubmit value="thêm vào giỏ hàng" show color="btn-black" size="btn-large" />
                </div>
                <div className={cx('btn-like')}>
                    <ButtonLike style={{ fontSize: 32 }} />
                </div>
            </div>

            <div className={cx('product-shipping')}>
                <div className={cx('shipping-box')}>
                    <LocalShippingIcon style={styleIconShipping} />
                    <div className={cx('shipping-content')}>
                        <h2 className={cx('title')}>Miễn phí vận chuyển</h2>
                        <p className={cx('content')}>Giao hàng miễn phí tiêu chuẩn cho các đơn hàng trên 230.000₫</p>
                        <p className={cx('content')}>Giao hàng dự kiến vào ngày 15/08/2022 - 17/08/2022.</p>
                    </div>
                </div>
                <div className={cx('shipping-box')}>
                    <LocalAtmIcon style={styleIconShipping} />
                    <div className={cx('shipping-content')}>
                        <h2 className={cx('title')}>Miễn phí vận chuyển</h2>
                        <p className={cx('content')}>Giao hàng miễn phí tiêu chuẩn cho các đơn hàng trên 230.000₫</p>
                    </div>
                </div>
                <div className={cx('shipping-box')}>
                    <VerifiedUserOutlinedIcon style={styleIconShipping} />
                    <div className={cx('shipping-content')}>
                        <h2 className={cx('title')}>Miễn phí vận chuyển</h2>
                        <p className={cx('content')}>Giao hàng miễn phí tiêu chuẩn cho các đơn hàng trên 230.000₫</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
