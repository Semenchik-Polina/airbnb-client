import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ServiceTab from '../components/service-tab/service-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        initialValues: _.isEmpty(state.adminReducer.hotelInfo.services)
            ? {
                internet: 'Yes, for free',
                parking: 'Yes, for free',
                breakfast: 'Yes',
                facilities: [],
            }
            : state.adminReducer.hotelInfo.services,
    }),
    dispatch => ({
        addServices: data => dispatch(adminActions.addServices(data)),
    }),
)(
    reduxForm({
        form: 'serviceForm',
    })(ServiceTab),
);
