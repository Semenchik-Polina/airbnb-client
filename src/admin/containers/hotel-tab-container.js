import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import HotelTab from '../components/hotel-tab/hotel-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        initialValues: _.isEmpty(state.adminReducer.hotelInfo.mainInfo)
            ? { country: 'Russia' }
            : { ...state.adminReducer.hotelInfo.mainInfo },
    }),
    dispatch => ({
        addHotelInfo: data => dispatch(adminActions.addHotelInfo(data)),
    }),
)(
    reduxForm({
        form: 'hotelForm',
    })(HotelTab),
);
