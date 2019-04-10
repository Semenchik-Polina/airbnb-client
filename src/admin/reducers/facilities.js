import * as types from '../constants/types';

const initialState = null;

const facilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_SUPPOSED_HOTEL_FACILITIES: {
        const { data } = action;

        const freeFacilities = data
            .filter(facility => !facility.canBePaid)
            .map(facility => ({ value: facility.id, name: facility.name }));

        const possiblyPaidFacilities = data.filter(facility => facility.canBePaid);

        return {
            freeFacilities,
            possiblyPaidFacilities,
            rawFacilities: data,
        };
    }
    default:
        return state;
    }
};

export default facilitiesReducer;
