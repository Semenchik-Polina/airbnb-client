export const COUNTRIES = [{ value: 'Belarus', label: 'Belarus' }, { value: 'Russia', label: 'Russia' }];

export const SERVICE_ANSWERS = [
    { value: { isPaid: false }, label: 'Yes, for free' },
    { value: { isPaid: true }, label: 'Yes, for money' },
    { value: null, label: 'No' },
];

export const SERVICE_ANSWERS_INDEXES = {
    FREE_FACILITY_INDEX: 0,
    PAID_FACILITY_INDEX: 1,
    UNAVAILABLE_FACILITY_INDEX: 2,
};
