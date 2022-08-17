import images from 'assets/images';

const linkDelivery = 'https://www.shein.com.vn/Shipping-Info-a-280.html';

const linkReturnPolicy = 'https://www.shein.com.vn/Return-Policy-a-281.html';

export const GuidData = [
    {
        hashLink: 'Use-the-coupon-code',
        data: {
            title: 'sử dụng mã phiếu giảm giá',
            infoHead: {
                type: 'left',
                title: 'mã khuyến mại là gì?',
                content:
                    'Mã khuyến mãi là mã mà khách hàng có thể nhập vào hộp khuyến mại khi thanh toán để được giảm giá khi mua hàng.',
            },
            infoBody: {
                img: images.useCoupon,
                title: 'Cách đổi mã khuyến mãi',
                content: [
                    {
                        head: 'Bước 1',
                        body: [
                            'Khi thanh toán, hãy điền địa chỉ giao hàng của bạn, chọn phương thức thanh toán và tùy chọn giao hàng',
                            'Nếu bạn có Mã khuyến mại hợp lệ, chỉ cần nhập Mã khuyến mại vào hộp Mã khuyến mại.',
                            'Nếu bạn có điểm thưởng hoặc Số dư trên Wallet của bạn không trống, bạn cũng có thể áp dụng các điểm cho đơn hàng hoặc kiểm tra hộp Số dư trên Wallet.',
                        ],
                    },
                    {
                        head: 'Bước 2',
                        body: [
                            'Tiếp tục nhấp vào TIẾP TỤC THANH TOÁN để thanh toán cho đơn hàng được giảm giá hiện nay.',
                        ],
                    },
                ],
            },
            infoFoot: {
                title: 'Làm thế nào để có được một mã khuyến mãi?',
                content: [
                    {
                        head: 'Đăng ký',
                        body: [
                            'Khi thanh toán, hãy điền địa chỉ giao hàng của bạn, chọn phương thức thanh toán và tùy chọn giao hàng',
                            'Nếu bạn có Mã khuyến mại hợp lệ, chỉ cần nhập Mã khuyến mại vào hộp Mã khuyến mại.',
                            'Nếu bạn có điểm thưởng hoặc Số dư trên Wallet của bạn không trống, bạn cũng có thể áp dụng các điểm cho đơn hàng hoặc kiểm tra hộp Số dư trên Wallet.',
                        ],
                    },
                    {
                        head: 'Đăng ký nhận tin',
                        body: [
                            'Tiếp tục nhấp vào TIẾP TỤC THANH TOÁN để thanh toán cho đơn hàng được giảm giá hiện nay.',
                        ],
                    },
                    {
                        head: 'Những điều kiện là gì?',
                        body: [
                            '* Vui lòng sử dụng Mã khuyến mãi trước khi hết hạn.',
                            '* Một số Mã khuyến mãi có thể có các yêu cầu, chẳng hạn như mua hàng tối thiểu.',
                            '* Mã khuyến mãi không thể sử dùng đối với phí giao hàng và phí dịch vụ COD.',
                            '* Khách hàng chỉ có thể đổi một Mã khuyến mãi cho mỗi đơn hàng.',
                        ],
                    },
                ],
            },
        },
    },
    {
        hashLink: 'Payment-on-delivery',
        data: {
            title: 'Thanh Toán Khi Nhận Hàng (COD)',
            infoHead: {
                type: 'left',
                content:
                    'Thanh toán khi giao hàng (COD) là một dịch vụ mới tại SHEIN được cung cấp cho khách hàng của chúng tôi ở Việt Nam, có nghĩa là trả tiền khi nhân viên vận chuyển giao hàng đến khách hàng, để khách hàng của chúng tôi tận hưởng dịch vụ tốt hơn.',
            },
            infoBody: {
                title: '',
                content: [
                    {
                        head: '1. ĐẶT HÀNG',
                        body: [
                            'Điều kiện khi đặt hàng: Tổng tiền của đơn đặt hàng không được vượt quá 464.000.000đ(US$200). Địa chỉ giao hàng và số điện thoại di động chính xác là cần thiết. Không cần chịu phí COD .',
                            'Xác minh SMS: Đơn đặt hàng được xác nhận sau khi bạn nhập mã xác minh từ tin nhắn được gửi tới điện thoại di động của bạn và mã có hiểu lực trong 30 phút. Do bất thường của nhà mạng Mobifone, dịch vụ COD tạm thời không thể sử dụng.Để đảm bảo đơn đặt hàng của bạn được thanh toán bình thường , vui lòng chọn cách thanh toán bằng thẻ hoặc thay thế một nhà mạng khác để nhận được mã xác nhận, cám ơn bạn.',
                            'Hủy đơn hàng: Bạn có thể hủy đơn đặt hàng từ 10 phút đến 6 giờ sau khi xác nhận. Nếu không thành công, thì có nghĩa là đơn đặt hàng đã được xử lý để giao hàng. Trong trường hợp này, vui lòng liên hệ với nhân viên dịch vụ khách hàng để thử lại.',
                        ],
                    },
                    {
                        head: '2. Vận Chuyển & Giao Hàng',
                        body: [
                            `Vận chuyển: Các đơn hàng đặt trên SHEIN sẽ được vận chuyển bằng cty vận chuyển khác nhau,vui lòng tham khảo chi tiết thời gian vận chuyển.${linkDelivery} .Sự chậm trễ đặt biệt có thể xảy ra do những trường hợp đặt biệt.Chúng tôi sẽ cố gắng hết sức để vận chuyển và giao hàng cho bạn trong thời gian sớm nhất.`,
                            'Giao hàng: Nhân viên vận chuyển sẽ giao hàng cho bạn tại địa chỉ của bạn và nhận tiền đặt hàng thay vì chúng tôi. Vui lòng chuẩn bị trước đúng số tiền và đảm bảo điện thoại di động của bạn không bị khóa để nhân viên vận chuyển có thể liên lạc với bạn.',
                        ],
                    },
                    {
                        head: '3. Trả Hàng & Hoàn Tiền',
                        body: [
                            `Trả hàng: ể biết thêm thông tin về sự trả lại, xin vui lòng tham khảo ${linkReturnPolicy} của chúng tôi.`,
                            'Hoàn tiền: Khoản tiền hoàn lại được xử lý trong vòng 5 ngày làm việc sau khi chúng tôi nhận được gói trả lại của bạn. Đối với các đơn hàng COD, số tiền sẽ được trả lại cho ví SHEIN của bạn và bạn có thể sử dụng nó với mã phiếu giảm giá và các điểm thưởng trong lần mua hàng tiếp theo. Trả lại số tiền cho ví SHEIN cần khoảng 24 giờ. Sau khi tiền của đơn đặt hàng COD của bạn đã được hoàn trong ví SHEIN của bạn, số dư không thể rút hoặc chuyển sang tài khoản khác hoặc thẻ ngân hàng.',
                        ],
                    },
                ],
            },
        },
    },
    {
        hashLink: 'Delivery-information',
        data: {
            title: 'Thông Tin Vận Chuyển',
            infoHead: {
                type: 'center',
                title: '1-3 ngày để xử lý',
            },
            infoBody: {
                title: 'Giao hàng dự kiến từ 1 - 5 ngày kể từ thời điểm đơn hàng được xác nhận .',
                content: [
                    {
                        body: [
                            '* Trong hầu hết các trường hợp, gói hàng sẽ được giao trong thời gian dự kiến đến. Tuy nhiên, ngày giao hàng thực tế có thể bị ảnh hưởng bởi việc sắp xếp chuyến bay, điều kiện thời tiết và các yếu tố bên ngoài khác. Vui lòng tham khảo thông tin theo dõi để biết ngày giao hàng chính xác nhất. Thời gian cụ thể tùy thuộc vào trang web / thông báo chính thức của công ty hậu cần.',
                            'Nếu gói hàng của bạn chưa được giao hoặc thông tin theo dõi của bạn cho thấy gói hàng của bạn đã được giao nhưng bạn chưa nhận được, bạn phải liên hệ với Dịch vụ Khách hàng để xác minh trong vòng 45 ngày kể từ ngày đặt hàng. Đối với các đơn đặt hàng, sản phẩm và các vấn đề liên quan đến hậu cần khác, bạn phải liên hệ với dịch vụ khách hàng trong vòng 90 ngày kể từ ngày đặt hàng.',
                            '* Vui lòng bấm vào nút "Xác nhận Giao hàng" trong vòng 6 tháng (kể từ ngày gửi hàng). Sau đó, nút sẽ chuyển sang màu xám và không thể được sử dụng để nhận thêm điểm.',
                        ],
                    },
                ],
            },
        },
    },
];
