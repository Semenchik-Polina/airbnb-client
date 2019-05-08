import { connect } from 'react-redux';

import FinishTab from '../components/finish-tab/finish-tab';

import Hotel from '../../shared/models/hotel';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        hotel: new Hotel({ ...state.adminReducer.hotelInfo, photo: state.adminReducer.hotelInfo.rooms[0].photos[0] }),
        isEditableHotel: !!state.adminReducer.hotelInfo.id,
    }),
    dispatch => ({
        createHotel: data => dispatch(adminActions.createHotel(data)),
        editHotel: data => dispatch(adminActions.editHotel(data)),
    }),
)(FinishTab);
