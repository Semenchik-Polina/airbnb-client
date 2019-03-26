import _ from 'lodash';
import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect(state => ({
    hotelInfo: state.adminReducer.hotelInfo,
    isMainInfoFilled: !_.isEmpty(state.adminReducer.hotelInfo.mainInfo),
    isRoomFormFilled:
        !_.isEmpty(state.adminReducer.hotelInfo.roomTypes) && !_.isEmpty(state.adminReducer.hotelInfo.mainInfo),
    isServiceFormFilled:
        !_.isEmpty(state.adminReducer.hotelInfo.roomTypes)
        && !_.isEmpty(state.adminReducer.hotelInfo.mainInfo)
        && !_.isEmpty(state.adminReducer.hotelInfo.services),
    isPhotoFormFilled:
        !_.isEmpty(state.adminReducer.hotelInfo.roomTypes)
        && !_.isEmpty(state.adminReducer.hotelInfo.mainInfo)
        && !_.isEmpty(state.adminReducer.hotelInfo.services)
        && !_.isEmpty(state.adminReducer.hotelInfo.photoTour),
}))(TabBar);
