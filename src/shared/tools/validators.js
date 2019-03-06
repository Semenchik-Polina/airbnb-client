export const isRequired = value => (value ? undefined : 'is required');

export const isValidEmail = (email) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email) ? undefined : 'is invalid';
};

export const minLength = min => (value) => {
    if (value && value.length < min) {
        return `have to contain at least ${min} characters`;
    }
    return undefined;
};

export const minLength8 = minLength(8);
