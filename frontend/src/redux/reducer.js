const initState = {
    cartList: [],
    totalPay: 0,
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'cartList/addToCart':
            return {
                ...state,
                cartList: [...state.cartList, action.payload],
            };

        case 'cartList/increaseOne':
            state.cartList.filter((product) => {
                if (action.payload.id === product.id) {
                    return (product.quantityInCart += 1);
                }
            });
            return state;

        case 'cartList/decreaseOne':
            state.cartList.filter((product) => {
                if (action.payload.id === product.id) {
                    product.quantityInCart -= 1;
                }
                if (product.quantityInCart <= 0) {
                    product.quantityInCart = 0;
                }
            });
            return state;

        default:
            return state;
    }
};

export default rootReducer;
