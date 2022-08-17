import config from 'config';

import Women from 'pages/Women';
import WomenProduct from 'pages/Women/WomenProduct';

import Kid from 'pages/Kid';
import KidProduct from 'pages/Kid/KidProduct';

import Men from 'pages/Men';
import MenProduct from 'pages/Men/MenProduct';

import PlusSize from 'pages/PlusSize';
import PlusSizeProduct from 'pages/PlusSize/PlusSizeProduct';

import Life from 'pages/Life';
import LifeProduct from 'pages/Life/LifeProduct';

import Login from 'pages/Login';
import Cart from 'pages/Cart';
import LikeList from 'pages/LikeList/LikeList';
import Guid from 'pages/Guid/Guid';
import DetailPage from 'pages/DetailPage';

// Menu Header Routes
const menuHeaderRoutes = [
    {
        path: config.routesConfig.root,
        title: 'nữ',
        component: Women,
    },
    {
        path: config.routesConfig.kid,
        title: 'trẻ em',
        component: Kid,
    },
    {
        path: config.routesConfig.men,
        title: 'nam',
        component: Men,
    },
    {
        path: config.routesConfig.plusSize,
        title: 'plus size',
        component: PlusSize,
    },
    {
        path: config.routesConfig.life,
        title: 'đời sống',
        component: Life,
    },
];

// Public Routes
const publicRoutes = [
    {
        path: config.routesConfig.root,
        title: 'nữ',
        component: Women,
        type: 'women',
        code: ['sw', 'sj'],
    },
    {
        path: config.routesConfig.womenProducts,
        title: 'nữ',
        component: WomenProduct,
        type: 'women',
        code: ['sw', 'sj'],
    },
    {
        path: config.routesConfig.kid,
        title: 'trẻ em',
        component: Kid,
        type: 'kid',
        code: ['sa', 'sk'],
    },
    {
        path: config.routesConfig.kidProducts,
        title: 'trẻ em',
        component: KidProduct,
        type: 'kid',
        code: ['sa', 'sk'],
    },
    {
        path: config.routesConfig.men,
        title: 'nam',
        component: Men,
        type: 'men',
        code: ['sm'],
    },
    {
        path: config.routesConfig.menProducts,
        title: 'nam',
        component: MenProduct,
        type: 'men',
        code: ['sm'],
    },
    {
        path: config.routesConfig.plusSize,
        title: 'plus size',
        component: PlusSize,
        type: 'plusSize',
        code: ['sf'],
    },
    {
        path: config.routesConfig.plusSizeProducts,
        title: 'plus size',
        component: PlusSizeProduct,
        type: 'plusSize',
        code: ['sf'],
    },
    {
        path: config.routesConfig.life,
        title: 'đời sống',
        component: Life,
        type: 'life',
        code: ['sh'],
    },
    {
        path: config.routesConfig.lifeProducts,
        title: 'đời sống',
        component: LifeProduct,
        type: 'life',
        code: ['sh'],
    },
    {
        path: config.routesConfig.login,
        title: 'đăng nhập',
        component: Login,
        type: '',
        code: [],
    },
    {
        path: config.routesConfig.cart,
        title: 'giỏ hàng',
        component: Cart,
        type: '',
        code: [],
    },
    {
        path: config.routesConfig.like,
        title: 'danh sách yêu thích',
        component: LikeList,
        type: '',
        code: [],
    },
    {
        path: `${config.routesConfig.guid}/:hashLink`,
        title: 'hướng dẫn sử dụng',
        component: Guid,
        type: '',
        code: [],
    },
    {
        path: `${config.routesConfig.productInfo}/:productID`,
        title: 'đang xem sản phẩm này',
        component: DetailPage,
        type: '',
        code: [],
    },
];

const privateRoutes = [];

export { menuHeaderRoutes, publicRoutes, privateRoutes };
