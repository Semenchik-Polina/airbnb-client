import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';

import ModalBooking from '../components/modal-booking/modal-booking';

import * as actions from '../actions/actions';
import Room from '../../shared/models/room';

const selector = formValueSelector('bookingForm');

export default connect(
    (state) => {
        const selectedRoom = selector(state, 'room');
        const guestsSelector = selector(state, 'guests');

        const rooms = state.hotelPage.hotel.rooms.map((item, index) => {
            const { count, ...value } = item;
            return {
                value: new Room(value),
                label: `Room ${index + 1}: guests: ${item.capacity}, cost: $${item.cost}`,
            };
        });

        const filterGuests = state.userReducer.hotelFilters.guests || 1;
        const room = _.find(rooms, type => type.value.capacity >= filterGuests)
            || _.maxBy(rooms, type => type.value.capacity);
        const guests = filterGuests > room.value.capacity ? room.value.capacity : filterGuests;

        const dates = {
            from: state.userReducer.hotelFilters.dateRange.from || undefined,
            to: state.userReducer.hotelFilters.dateRange.to || undefined,
        };

        return {
            rooms,
            guestsSelector,
            selectedRoom,
            initialValues: { room: room.value, guests, dates },
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
