import { connect } from 'react-redux';

import HotelPage from '../components/hotel-page/hotel-page';

import * as actions from '../actions/actions.js';

export default connect(
    state => ({
        hotelInfo: state.hotelPage,
    }),
    dispatch => ({
        fetchHotel: id => dispatch(actions.fetchHotel(id)),
    }),
)(HotelPage);
