export const ROOM_TYPES = [
    { value: 'Single', label: 'Single' },
    { value: 'Double', label: 'Double' },
    { value: 'Twin', label: 'Twin' },
    { value: 'Apartment', label: 'Apartment' },
];

export const HOTEL_ZONES = [
    { value: 'Hotel', label: 'Hotel' },
    { value: 'Outdoor space', label: 'Outdoor space' },
    { value: 'Bar', label: 'Bar' },
    { value: 'Restaurant', label: 'Restaurant' },
    { value: 'Room', label: 'Room' },
    { value: 'Bathroom', label: 'Bathroom' },
];

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
