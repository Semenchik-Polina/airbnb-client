import { connect } from 'react-redux';

import FinishTab from '../components/finish-tab/finish-tab';

import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        hotelInfo: state.adminReducer.hotelInfo,
    }),
    dispatch => ({
        createHotel: data => dispatch(adminActions.createHotel(data)),
    }),
)(FinishTab);
