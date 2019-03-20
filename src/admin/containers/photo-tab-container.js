import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import PhotoTab from '../components/photo-tab/photo-tab';

import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        photoValues: getFormValues('photoForm')(state),
        photoItems: state.adminReducer.hotelInfo.photos,
    }),
    dispatch => ({
        addPhotos: data => dispatch(adminActions.addPhotos(data)),
    }),
)(
    reduxForm({
        form: 'photoForm',
        initialValues: {
            type: 'Hotel',
        },
    })(PhotoTab),
);
