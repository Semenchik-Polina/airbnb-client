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

export const COUNTRIES = [
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Russia', label: 'Russia' },
];

export const POPULAR_FACILITIES = [
    { id: 1, name: 'TV' },
    { id: 2, name: 'Wifi' },
    { id: 3, name: 'Swimming pool' },
    { id: 4, name: 'Air conditioning' },
    { id: 5, name: 'Hair dryer' },
    { id: 6, name: 'Iron' },
    { id: 7, name: 'Coffe maker' },
    { id: 7, name: 'Elevator' },
];

export const SERVICE_ANSWERS = [
    { value: 'Yes, for free', label: 'Yes, for free' },
    { value: 'Yes, for money', label: 'Yes, for money' },
    { value: 'No', label: 'No' },
];

export const adminTypes = {
    ADD_HOTEL_MAIN_INFO: 'ADD_HOTEL_MAIN_INFO',
    ADD_SERVICE_INFO: 'ADD_SERVICE_INFO',
    ADD_PHOTOS: 'ADD_PHOTOS',
    REMOVE_PHOTO_ITEM: 'REMOVE_PHOTO_ITEM',
    ADD_ROOM_TYPE: 'ADD_ROOM_TYPE',
    DELETE_ROOM_TYPE: 'DELETE_ROOM_TYPE',
    EDIT_ROOM_TYPE: 'EDIT_ROOM_TYPE',
};
