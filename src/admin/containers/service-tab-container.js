import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ServiceTab from '../components/service-tab/service-tab';
import { adminActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addServices: data => dispatch(adminActions.addServices(data)),
    }),
)(
    reduxForm({
        form: 'serviceForm',
        destroyOnUnmount: false,
        initialValues: {
            internet: 'Yes, for free',
            parking: 'Yes, for free',
            breakfast: 'Yes',
        },
    })(ServiceTab),
);
