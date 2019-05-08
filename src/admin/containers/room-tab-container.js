import { connect } from 'react-redux';

import RoomTab from '../components/room-tab/room-tab';

import * as actions from '../actions/actions';

export default connect(
    state => ({
        rooms: state.adminReducer.hotelInfo.rooms,
    }),
    dispatch => ({
        addRooms: data => dispatch(actions.addRooms(data)),
        deleteRoomType: id => dispatch(actions.deleteRoomType(id)),
        setEditableId: id => dispatch(actions.setEditableId(id)),
        unsetEditableId: () => dispatch(actions.unsetEditableId()),
        fetchRoomTypes: () => dispatch(actions.fetchRoomTypes()),
    }),
)(RoomTab);
