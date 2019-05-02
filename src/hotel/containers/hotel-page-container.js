import { connect } from 'react-redux';
import _ from 'lodash';

import HotelPage from '../components/hotel-page/hotel-page';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        hotelInfo: state.hotelPage.hotel,
        isModalShown: state.hotelPage.bookingModal.isModalShown,
        user: state.auth.user,
        minPrice: state.hotelPage.hotel ? _.minBy(state.hotelPage.hotel.rooms, 'cost').cost : 0,
        maxPrice: state.hotelPage.hotel ? _.maxBy(state.hotelPage.hotel.rooms, 'cost').cost : 0,
    }),
    dispatch => ({
        fetchHotel: id => dispatch(actions.fetchHotel(id)),
        showModal: () => dispatch(actions.showModal()),
        hideModal: () => dispatch(actions.hideModal()),
    }),
)(HotelPage);
