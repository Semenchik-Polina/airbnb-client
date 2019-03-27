import { connect } from 'react-redux';

import FinishTab from '../components/finish-tab/finish-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        hotelInfo: state.adminReducer.hotelInfo,
        isEditableHotel: !!state.adminReducer.hotelInfo.id,
    }),
    dispatch => ({
        createHotel: data => dispatch(adminActions.createHotel(data)),
        editHotel: data => dispatch(adminActions.editHotel(data)),
    }),
)(FinishTab);
