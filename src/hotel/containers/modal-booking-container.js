import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';

import ModalBooking from '../components/modal-booking/modal-booking';

import * as actions from '../actions/actions';

const selector = formValueSelector('bookingForm');

export default connect(
    (state) => {
        const selectedRoomType = selector(state, 'roomType');
        const guestsSelector = selector(state, 'guests');

        const roomTypes = state.hotelPage.hotel.roomTypes.map((item) => {
            const { id, amount, ...value } = item;
            return {
                value,
                label: `Type: ${item.type}, capacity: ${item.capacity}, cost: ${item.cost}`,
            };
        });

        const filterGuests = state.userReducer.filters.guests;
        const roomType = _.find(roomTypes, type => type.value.capacity >= filterGuests)
            || _.maxBy(roomTypes, type => type.value.capacity);
        const guests = filterGuests > roomType.value.capacity ? roomType.value.capacity : filterGuests;

        const dates = {
            from: state.userReducer.filters.dateRange.from || undefined,
            to: state.userReducer.filters.dateRange.to || undefined,
        };

        return {
            roomTypes,
            guestsSelector,
            selectedRoomType,
            initialValues: { roomType: roomType.value, guests, dates },
        };
    },
    dispatch => ({
        changeGuestValue: value => dispatch(change('bookingForm', 'guests', value)),
        requestBooking: values => dispatch(actions.requestBooking(values)),
    }),
)(
    reduxForm({
        form: 'bookingForm',
    })(ModalBooking),
);
