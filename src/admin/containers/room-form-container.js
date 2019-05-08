import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RoomForm from '../components/room-form/room-form';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        roomTypes: state.adminReducer.roomTypes
            ? state.adminReducer.roomTypes.map(type => ({
                value: type.id,
                label: type.name,
            }))
            : null,
        initialValues: state.adminReducer.hotelInfo.editableId
            ? {
                ..._.find(state.adminReducer.hotelInfo.rooms, {
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
