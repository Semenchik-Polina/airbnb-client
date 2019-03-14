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

    deleteRoomType = () => {
        const {
            deleteRoomType,
            room: { id },
        } = this.props;
        deleteRoomType(id);
    };

    render() {
        const {
            room: { type, amount },
        } = this.props;
        return (
            <div className="room-item">
                <span className="room-item__type">{type}</span>
                <span>{`Amount: ${amount}`}</span>
                <span>Edit</span>
                <span className="room-item__action" onClick={this.deleteRoomType}>
                    {'Delete'}
                </span>
            </div>
        );
    }
}

export default RoomItem;
