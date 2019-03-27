import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RoomForm from '../components/room-form/room-form';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        initialValues: state.adminReducer.hotelInfo.editableId
            ? {
                ..._.find(state.adminReducer.hotelInfo.roomTypes, {
                    id: state.adminReducer.hotelInfo.editableId,
                }),
            }
            : {
                type: 'Twin',
            },
    }),
    dispatch => ({
        addRoomType: data => dispatch(adminActions.addRoomType(data)),
    }),
)(
    reduxForm({
        form: 'roomForm',
    })(RoomForm),
);
