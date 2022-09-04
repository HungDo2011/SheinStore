export const testEmail = (value) => {
    // eslint-disable-next-line
    const regexEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;

    return regexEmail.test(value);
};

export function testPassword(password) {
    return 8 <= password.length && password.length;
}

export function verifyPassword(password, comparePassword) {
    return password === comparePassword;
}
