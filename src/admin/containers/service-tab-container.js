import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ServiceTab from '../components/service-tab/service-tab';

import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        initialValues: state.adminReducer.hotelInfo.services,
    }),
    dispatch => ({
        addServices: data => dispatch(adminActions.addServices(data)),
    }),
)(
    reduxForm({
        form: 'serviceForm',
        destroyOnUnmount: false,
    })(ServiceTab),
);
