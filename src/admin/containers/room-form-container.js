import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RoomForm from '../components/room-form/room-form';

import { adminActions } from '../actions/actions';

export default connect(
    null,
    dispatch => ({
        addRoomType: data => dispatch(adminActions.addRoomType(data)),
    }),
)(
    reduxForm({
        form: 'roomForm',
    })(RoomForm),
);
