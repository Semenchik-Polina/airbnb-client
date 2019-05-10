import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RoomForm from '../components/room-form/room-form';

import * as adminActions from '../actions/actions';

export default connect(
    state => ({
        roomTypes: state.adminReducer.roomTypes.map(type => ({
            value: type.id,
            label: type.name,
        })),
        initialValues: state.adminReducer.hotelInfo.editableId
            ? {
                ..._.find(state.adminReducer.hotelInfo.rooms, {
                    id: state.adminReducer.hotelInfo.editableId,
                }),
                type: _.find(state.adminReducer.hotelInfo.rooms, {
                    id: state.adminReducer.hotelInfo.editableId,
                }).type._id,
            }
            : {
                type: state.adminReducer.roomTypes[0].id,
            },
    }),
    dispatch => ({
        addRoom: data => dispatch(adminActions.addRoom(data)),
    }),
)(
    reduxForm({
        form: 'roomForm',
    })(RoomForm),
);
