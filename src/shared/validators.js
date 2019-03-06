// is it right place for validators.js?
// maybe I should transfer this file to controllers?

export const isRequired = value => (value ? undefined : 'is required');

export const isValidEmail = (email) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email) ? undefined : 'is invalid';
};

export const minLength = min => value => (value && value.length < min ? `At least ${min} characters` : undefined);

export const minLength8 = minLength(8);
