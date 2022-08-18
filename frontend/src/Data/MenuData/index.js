import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

import images from 'assets/images';
import config from 'config';

const MENU_USER_DATA = [
    {
        title: 'Đăng nhập / Đăng Ký',
        link: config.routesConfig.login,
    },
    {
        title: 'Đơn Hàng Của Tôi',
        link: config.routesConfig.login,
    },
    {
        title: 'Tin Nhắn Của Tôi',
        link: config.routesConfig.login,
    },
    {
        title: 'Phiếu Giảm Giá Của Tôi',
        link: config.routesConfig.login,
    },
    {
        title: 'Điểm thưởng của tôi',
        link: config.routesConfig.login,
    },
    {
        title: 'Đã xem gần đây',
        link: config.routesConfig.login,
    },
    {
        title: 'Nhiều Dịch Vụ Hơn',
        link: config.routesConfig.login,
    },
];

const MENU_CART_DATA = [
    {
        content:
            'Chào mừng bạn trở lại! Nếu bạn có các mặt hàng trong giỏ hàng, chúng tôi đã lưu chúng cho bạn. Bạn có thể Đăng nhập bây giờ để xem chúng, hoặc bất cứ khi nào bạn đã sẵn sàng để kiểm tra.',
        img: images.emtyCart,
    },
];

const MENU_ADVISE_DATA = [
    {
        icon: HeadsetMicOutlinedIcon,
        content: 'Dịch vụ khách hàng',
        link: config.routesConfig.login,
    },
];

const MENU_LIKE_DATA = [];

const MENU_CURRENCY_DATA = [
    {
        title: 'Tiền tệ',
        options: ['VND/₫', 'USD/US$', 'EUR/€', 'GBP/GBP£'],
    },
];

const widgetMenu = [
    {
        name: 'user',
        link: config.routesConfig.login,
        icon: PersonOutlineOutlinedIcon,
        placement: 'bottom-start',
        data: MENU_USER_DATA,
    },
    {
        name: 'cart',
        link: config.routesConfig.cart,
        icon: ShoppingBagOutlinedIcon,
        placement: 'bottom',
        data: MENU_CART_DATA,
    },
    {
        name: 'like',
        link: config.routesConfig.like,
        icon: FavoriteBorderOutlinedIcon,
        placement: 'bottom-start',
        data: MENU_LIKE_DATA,
    },
    {
        name: 'advise',
        link: config.routesConfig.login,
        icon: HeadsetMicOutlinedIcon,
        placement: 'bottom-start',
        data: MENU_ADVISE_DATA,
    },
    {
        name: 'currency',
        link: config.routesConfig.login,
        icon: LanguageOutlinedIcon,
        placement: 'bottom-start',
        data: MENU_CURRENCY_DATA,
    },
];

export { widgetMenu, MENU_USER_DATA, MENU_CART_DATA };
