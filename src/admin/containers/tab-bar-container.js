import _ from 'lodash';
import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect((state) => {
    const {
        mainInfo, roomTypes, services, photos,
    } = state.adminReducer.hotelInfo;
    const isMainInfoFilled = !_.isEmpty(mainInfo);
    const isRoomFormFilled = !_.isEmpty(roomTypes) && isMainInfoFilled;
    const isServiceFormFilled = !_.isEmpty(services) && isRoomFormFilled;
    const isPhotoFormFilled = !_.isEmpty(photos) && isServiceFormFilled;

    return {
        isMainInfoFilled, isRoomFormFilled, isServiceFormFilled, isPhotoFormFilled,
    };
})(TabBar);
