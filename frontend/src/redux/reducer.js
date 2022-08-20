const initState = {
    cartList: [],
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
                if (product.id == action.id) {
                    product.quantityInCart += 1;
                    return {
                        ...state,
                        cartList: [...state.cartList],
                    };
                }
            });

        case 'cartList/decreaseOne':
            state.cartList.filter((product) => {
                if (product.id == action.id) {
                    if (product.quantityInCart <= 0) {
                        product.quantityInCart = 0;
                    } else {
                        product.quantityInCart -= 1;
                    }
                }

                return {
                    ...state,
                    cartList: [...state.cartList],
                };
            });

        case 'cartList/setQuantityInCart':
            state.cartList.filter((product, index) => {
                if (index === action.index) {
                    product.quantityInCart = action.payload;
                }

                return {
                    ...state,
                    cartList: [...state.cartList],
                };
            });

        default:
            return state;
    }
};

export default rootReducer;
