import { connect } from 'react-redux';
import RoomTab from '../components/room-tab/room-tab';
import { adminActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addRooms: data => dispatch(adminActions.addRooms(data)),
    }),
)(RoomTab);
