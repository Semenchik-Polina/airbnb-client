import { connect } from 'react-redux';

import UserHome from '../components/user-home/user-home';

import * as userActions from '../actions/actions';

export default connect(
    state => ({
        hotels: state.userReducer.hotels,
    }),
    dispatch => ({
        fetchHotels: () => dispatch(userActions.fetchHotels()),
    }),
)(UserHome);
