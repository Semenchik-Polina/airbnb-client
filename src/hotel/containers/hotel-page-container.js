import { connect } from 'react-redux';

import HotelPage from '../components/hotel-page/hotel-page';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        hotelInfo: state.hotelPage.hotel,
        isModalShown: state.hotelPage.bookingModal.isModalShown,
        user: state.auth.user,
    }),
    dispatch => ({
        fetchHotel: id => dispatch(actions.fetchHotel(id)),
        showModal: () => dispatch(actions.showModal()),
        hideModal: () => dispatch(actions.hideModal()),
    }),
)(HotelPage);
