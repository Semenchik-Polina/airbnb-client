import { connect } from 'react-redux';

import PhotoTab from '../components/photo-tab/photo-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        photoTour: state.adminReducer.hotelInfo.photoTour,
    }),
    dispatch => ({
        removePhotoItem: index => dispatch(adminActions.removePhotoItem(index)),
    }),
)(PhotoTab);
