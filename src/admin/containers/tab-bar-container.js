import { hasSubmitSucceeded } from 'redux-form';
import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect(
    state => ({
        hotelFormSubmitSucceeded: hasSubmitSucceeded('hotelForm')(state),
        serviceFormSubmitSucceeded: hasSubmitSucceeded('serviceForm')(state),
        roomFormSubmitSucceeded: Boolean(state.adminReducer.hotelInfo.roomTypes.length),
    }),
)(TabBar);
