import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import RoomItem from '../room-item/room-item';

class RoomList extends PureComponent {
    static defaultProps = {
        className: '',
        roomTypes: null,
    };

    static propTypes = {
        rooms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        className: PropTypes.string,
        roomTypes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }),
        ),
    };

    render() {
        const { rooms, className } = this.props;
        const roomListClasses = classNames('room-list', className);

        return (
            <div className={roomListClasses}>
                {rooms.map((room, index) => (
                    <RoomItem
                        key={index}
                        room={room}
                        type={_.find(this.props.roomTypes, { id: room.type }).name}
                        {...this.props}
                    />
                ))}
            </div>
        );
    }
}

export default RoomList;
