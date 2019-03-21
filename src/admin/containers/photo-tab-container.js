import { connect } from 'react-redux';

import PhotoTab from '../components/photo-tab/photo-tab';

import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        hotelInfo: state.adminReducer.hotelInfo,
    }),
    dispatch => ({
        removePhotoItem: index => dispatch(adminActions.removePhotoItem(index)),
    }),
)(PhotoTab);
