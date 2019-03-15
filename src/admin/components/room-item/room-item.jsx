import React from 'react';
import PropTypes from 'prop-types';
import './room-item.scss';

const RoomItem = (props) => {
    const {
        deleteRoomType,
        room: { type, amount, id },
    } = props;

    const handleClick = () => {
        deleteRoomType(id);
    };

    return (
        <div className="room-item">
            <span className="room-item__type">{type}</span>
            <span>{`Amount: ${amount}`}</span>
            <span>Edit</span>
            <span className="room-item__action" onClick={handleClick}>
                {'Delete'}
            </span>
        </div>
    );
};

RoomItem.propTypes = {
    room: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    deleteRoomType: PropTypes.func.isRequired,
};

export default RoomItem;
