import { connect } from 'react-redux';
import { destroy } from 'redux-form';
import RoomTab from '../components/room-tab/room-tab';
import { adminActions } from '../actions/actions';

export default connect(
    state => ({
        rooms: state.adminReducer.rooms.roomTypes,
    }),
    dispatch => ({
        addRooms: data => dispatch(adminActions.addRooms(data)),
        addRoomType: data => dispatch(adminActions.addRoomType(data)),
        deleteRoomType: id => dispatch(adminActions.deleteRoomType(id)),
        destroyRoomForm: () => dispatch(destroy('roomForm')),
    }),
)(RoomTab);
