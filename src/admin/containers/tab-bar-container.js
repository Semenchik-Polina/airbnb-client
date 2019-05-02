import _ from 'lodash';
import { connect } from 'react-redux';

import TabBar from '../components/tab-bar/tab-bar';

export default connect((state) => {
    const {
        rooms, facilities,
    } = state.adminReducer.hotelInfo;

    const isMainInfoFilled = !!state.adminReducer.hotelInfo.name;
    const isRoomFormFilled = !_.isEmpty(rooms) && isMainInfoFilled;
    const isServiceFormFilled = !_.isEmpty(facilities) && isRoomFormFilled;

    return {
        isMainInfoFilled, isRoomFormFilled, isServiceFormFilled,
    };
})(TabBar);
