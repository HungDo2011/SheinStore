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

        default:
            return state;
    }
};

export default rootReducer;
