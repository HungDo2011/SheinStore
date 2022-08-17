import images from 'assets/images';
import config from 'config';

const MENU_FOOTER_DATA = [
    {
        head: 'thông tin công ty',
        child: [
            {
                title: 'Giới Thiệu SHEIN',
                link: config.routesConfig.login,
            },
            {
                title: 'Chương Trình Affiliate',
                link: config.routesConfig.login,
            },
            {
                title: 'Blogger Thời Trang',
                link: config.routesConfig.login,
            },
        ],
    },
    {
        head: 'HỖ TRỢ KHÁCH HÀNG',
        child: [
            {
                title: 'Phí Vận Chuyển',
                link: config.routesConfig.login,
            },
            {
                title: 'Trả Lại',
                link: config.routesConfig.login,
            },
            {
                title: 'Hướng Dẫn Đặt Hàng',
                link: config.routesConfig.login,
            },
            {
                title: 'Làm Thế Nào Để Theo Dõi',
                link: config.routesConfig.login,
            },
            {
                title: 'Hướng Dẫn Kích Thước',
                link: config.routesConfig.login,
            },
            {
                title: 'Trách Nhiệm Xã Hội',
                link: config.routesConfig.login,
            },
            {
                title: 'SHEIN VIP',
                link: config.routesConfig.login,
            },
        ],
    },
    {
        head: 'DỊCH VỤ KHÁCH HÀNG',
        child: [
            {
                title: 'Liên Hệ Chúng Tôi',
                link: config.routesConfig.login,
            },
            {
                title: 'Phương Thức Thanh Toán',
                link: config.routesConfig.login,
            },
            {
                title: 'Điểm Thưởng',
                link: config.routesConfig.login,
            },
        ],
    },
];

const CONECT_ITEM = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/SHEINVietnam/',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/15/15711268791b11aecd52c9ad7236770a437d626108.png',
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/shein_vn/',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/15/1571126900057552e0d97434ae7f9bcfe03cde7e5d.png',
    },
    {
        name: 'twitter',
        link: 'https://mobile.twitter.com/SHEIN_News',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/15/1571126913c17f781a002e2db08284534dbbbc524d.png',
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/user/sheinsidevideo',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/16/1571220781b937c4f7c80ea2a9af80101becf20218.png',
    },
    {
        name: 'pinterest',
        link: 'https://www.pinterest.com/SHEINofficial/',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/16/15712208021360d27b22f101d99e524bdcc23073ee.png',
    },
    {
        name: 'snapchat',
        link: 'https://www.snapchat.com/add/sheinofficial',
        icon: 'https://img.ltwebstatic.com/images3_pi/2019/10/16/15712208326c367e845b3530b8503f89f811d3c311.png',
    },
    {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@shein_official',
        icon: 'https://img.ltwebstatic.com/images3_acp/2020/05/04/15885861254392fb0d220d5ec952a2b47833a5e52d.png',
    },
];

const PAY_MENT_DATA = [
    {
        name: 'COD',
        img: images.payMentCOD,
    },
    {
        name: 'VISA',
        img: images.payMentVISA,
    },
    {
        name: 'Master-Card',
        img: images.payMentMC,
    },
    {
        name: 'Maestro',
        img: images.payMentMaestro,
    },
    {
        name: 'American-Express',
        img: images.payMentAE,
    },
    {
        name: 'PayPal',
        img: images.payMentPayPal,
    },
];

export { MENU_FOOTER_DATA, CONECT_ITEM, PAY_MENT_DATA };
