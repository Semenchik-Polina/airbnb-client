import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RoomItem from '../room-item/room-item';

class RoomForm extends PureComponent {
    static propTypes = {
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string,
                amount: PropTypes.number,
                id: PropTypes.number,
            }),
        ).isRequired,
        deleteRoomType: PropTypes.func.isRequired,
    };

    render() {
        const { rooms, deleteRoomType } = this.props;
        return (
            <div>
                {rooms.map((room, index) => (
                    <RoomItem key={index} room={room} deleteRoomType={deleteRoomType} />
                ))}
            </div>
        );
    }
}

export default RoomForm;
