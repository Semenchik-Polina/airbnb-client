import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './room-item.scss';

class RoomItem extends PureComponent {
    static propTypes = {
        room: PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
        deleteRoomType: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.deleteRoomType(this.props.room.id);
    };

    render() {
        const { room } = this.props;

        return (
            <div className="room-item">
                <span className="room-item__type">{room.type}</span>
                <span>{`Amount: ${room.amount}`}</span>
                <span>Edit</span>
                <span className="room-item__action" onClick={this.handleClick}>
                    {'Delete'}
                </span>
            </div>
        );
    }
}

export default RoomItem;
