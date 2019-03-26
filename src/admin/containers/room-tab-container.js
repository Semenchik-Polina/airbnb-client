import { connect } from 'react-redux';
import { destroy } from 'redux-form';

import RoomTab from '../components/room-tab/room-tab';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        rooms: state.adminReducer.hotelInfo.roomTypes,
    }),
    dispatch => ({
        addRooms: data => dispatch(adminActions.addRooms(data)),
        deleteRoomType: id => dispatch(adminActions.deleteRoomType(id)),
        setEditableId: id => dispatch(adminActions.setEditableId(id)),
        unsetEditableId: () => dispatch(adminActions.unsetEditableId()),
        destroyRoomForm: () => dispatch(destroy('roomForm')),
    }),
)(RoomTab);
