import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PhotoForm from '../components/photo-form/photo-form';

import * as adminActions from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addPhotos: data => dispatch(adminActions.addPhotos(data)),
    }),
)(
    reduxForm({
        form: 'photoForm',
        initialValues: {
            type: 'Hotel',
        },
    })(PhotoForm),
);
