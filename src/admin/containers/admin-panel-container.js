import { connect } from 'react-redux';

import AdminPanel from '../components/admin-panel/admin-panel';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        hotels: state.adminReducer.hotels,
    }),
    dispatch => ({
        fetchHotels: () => dispatch(adminActions.fetchHotels()),
        removeHotel: id => dispatch(adminActions.removeHotel(id)),
        startEditingHotel: hotel => dispatch(adminActions.startEditingHotel(hotel)),
        startCreatingHotel: () => dispatch(adminActions.startCreatingHotel()),
    }),
)(AdminPanel);
