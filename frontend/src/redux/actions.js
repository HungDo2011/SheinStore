export const addToCart = (data) => {
    return {
        type: 'cartList/addToCart',
        payload: data,
    };
};

export const increaseOne = (data) => {
    return {
        type: 'cartList/increaseOne',
        payload: data,
    };
};

export const decreaseOne = (data) => {
    return {
        type: 'cartList/decreaseOne',
        payload: data,
    };
};
