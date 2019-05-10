import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PhotoItem from '../../../shared/components/photo-item/photo-item';

import Room from '../../../shared/models/room';

import './room-item.scss';

class RoomItem extends PureComponent {
    static propTypes = {
        room: PropTypes.instanceOf(Room).isRequired,
        type: PropTypes.string.isRequired,
        deleteRoom: PropTypes.func.isRequired,
        editRoom: PropTypes.func.isRequired,
    };

    deleteRoom = () => {
        this.props.deleteRoom(this.props.room.id);
    };

    editRoom = () => {
        this.props.editRoom(this.props.room);
    };

    render() {
        const { room, type } = this.props;

        return (
            <div>
                <PhotoItem className="photo-tab__content-photo-container-item" photos={room.photos} />
                <div className="room-item">
                    <span className="room-item__type">{type}</span>
                    <span>{`Count: ${room.count}`}</span>
                    <span>{`Price: ${room.cost}`}</span>
                    <span className="room-item__action" onClick={this.editRoom}>
                        Edit
                    </span>
                    <span className="room-item__action" onClick={this.deleteRoom}>
                        Delete
                    </span>
                </div>
            </div>
        );
    }
}

export default RoomItem;
