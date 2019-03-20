import { connect } from 'react-redux';
import { reduxForm, destroy } from 'redux-form';

import PhotoForm from '../components/photo-form/photo-form';

import { adminActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addPhotos: data => dispatch(adminActions.addPhotos(data)),
        destroyPhotoForm: () => dispatch(destroy('photoForm')),
    }),
)(
    reduxForm({
        form: 'photoForm',
        initialValues: {
            type: 'Hotel',
        },
    })(PhotoForm),
);
