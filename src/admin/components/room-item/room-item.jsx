import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './room-item.scss';

class RoomItem extends PureComponent {
    static propTypes = {
        room: PropTypes.shape().isRequired,
        deleteRoomType: PropTypes.func.isRequired,
        editRoomType: PropTypes.func.isRequired,
    };

    deleteRoom = () => {
        this.props.deleteRoomType(this.props.room.id);
    };

    editRoom = () => {
        this.props.editRoomType(this.props.room);
    }

    render() {
        const { room } = this.props;

        return (
            <div className="room-item">
                <span className="room-item__type">{room.type}</span>
                <span>{`Amount: ${room.amount}`}</span>
                <span onClick={this.editRoom}>Edit</span>
                <span className="room-item__action" onClick={this.deleteRoom}>
                    Delete
                </span>
            </div>
        );
    }
}

export default RoomItem;
