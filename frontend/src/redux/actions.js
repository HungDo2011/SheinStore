export const addToCart = (data) => {
    return {
        type: 'cartList/addToCart',
        payload: data,
    };
};
