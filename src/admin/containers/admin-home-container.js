import { connect } from 'react-redux';
import AdminHome from '../components/admin-home/admin-home';
import { hotelActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        createHotel: data => dispatch(hotelActions.createHotel(data)),
    }),
)(AdminHome);
