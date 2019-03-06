// is it right place for validators.js?
// maybe I should transfer this file to controllers?

export const isRequired = value => (value ? undefined : 'required');
