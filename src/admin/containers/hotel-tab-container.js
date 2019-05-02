import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import HotelTab from '../components/hotel-tab/hotel-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        initialValues: !state.adminReducer.hotelInfo.name
            ? { country: 'Russia' }
            : {
                name: state.adminReducer.hotelInfo.name,
                country: state.adminReducer.hotelInfo.country,
                city: state.adminReducer.hotelInfo.city,
                address: state.adminReducer.hotelInfo.address,
            },
    }),
    dispatch => ({
        addHotelInfo: data => dispatch(adminActions.addHotelInfo(data)),
    }),
)(
    reduxForm({
        form: 'hotelForm',
    })(HotelTab),
);
