import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PhotoItem from '../../../shared/components/photo-item/photo-item';

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
    };

    render() {
        const { room } = this.props;

        return (
            <div>
                <PhotoItem className="photo-tab__content-photo-container-item" photos={room.photos} />
                <div className="room-item">
                    <span className="room-item__type">{room.type}</span>
                    <span>{`Amount: ${room.count}`}</span>
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
