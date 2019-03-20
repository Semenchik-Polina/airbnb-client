import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import HotelTab from '../components/hotel-tab/hotel-tab';

import { adminActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addHotelInfo: data => dispatch(adminActions.addHotelInfo(data)),
    }),
)(
    reduxForm({
        form: 'hotelForm',
        initialValues: {
            country: 'Belarus',
        },
        destroyOnUnmount: false,
    })(HotelTab),
);
