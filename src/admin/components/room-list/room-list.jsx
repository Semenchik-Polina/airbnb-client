import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RoomItem from '../room-item/room-item';

class RoomForm extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string,
                amount: PropTypes.number,
                id: PropTypes.number,
            }),
        ).isRequired,
        deleteRoomType: PropTypes.func.isRequired,
        className: PropTypes.string,
    };

    renderItem = (room, index) => (
        <RoomItem key={index} room={room} deleteRoomType={this.props.deleteRoomType} />
    );

    render() {
        const { rooms, className } = this.props;
        const roomListClasses = classNames('room-list', className);

        return (
            <div className={roomListClasses}>
                {rooms.map(this.renderItem)}
            </div>
        );
    }
}

export default RoomForm;
