export const addToCart = (data) => {
    return {
        type: 'cartList/addToCart',
        payload: data,
    };
};

export const increaseOne = (index) => {
    return {
        type: 'cartList/increaseOne',
        payload: index,
    };
};

export const decreaseOne = (index) => {
    return {
        type: 'cartList/decreaseOne',
        payload: index,
    };
};

export const setQuantityInCart = (quantity, index) => {
    return {
        type: 'cartList/setQuantityInCart',
        payload: quantity,
        index: index,
    };
};
