import { connect } from 'react-redux';
import ServiceTab from '../components/service-tab/service-tab';
import { hotelActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        createHotel: data => dispatch(hotelActions.createHotel(data)),
    }),
)(ServiceTab);
