export const addToCart = (data) => {
    return {
        type: 'cartList/addToCart',
        payload: data,
    };
};

export const increaseOne = (id) => {
    return {
        type: 'cartList/increaseOne',
        id,
    };
};

export const decreaseOne = (id) => {
    return {
        type: 'cartList/decreaseOne',
        id,
    };
};

export const setQuantityInCart = (quantity, id) => {
    return {
        type: 'cartList/setQuantityInCart',
        payload: quantity,
        id,
    };
};
