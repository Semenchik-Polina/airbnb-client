import { connect } from 'react-redux';

import AdminHome from '../components/admin-home/admin-home';

import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        hotels: state.adminReducer.hotels,
    }),
    dispatch => ({
        fetchHotels: () => dispatch(adminActions.fetchHotels()),
    }),
)(AdminHome);
