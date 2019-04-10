import _ from 'lodash';
import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect((state) => {
    const {
        roomTypes, services, photoTour,
    } = state.adminReducer.hotelInfo;

    const isMainInfoFilled = !!state.adminReducer.hotelInfo.hotelName;
    const isRoomFormFilled = !_.isEmpty(roomTypes) && isMainInfoFilled;
    const isServiceFormFilled = !_.isEmpty(services) && isRoomFormFilled;
    const isPhotoFormFilled = !_.isEmpty(photoTour) && isServiceFormFilled;

    return {
        isMainInfoFilled, isRoomFormFilled, isServiceFormFilled, isPhotoFormFilled,
    };
})(TabBar);
