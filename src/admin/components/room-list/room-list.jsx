import React, {PureComponent} from 'react';
import RoomItem from '../room-item/room-item';
import PropTypes from 'prop-types';


class RoomForm extends PureComponent {
    // static propTypes = {
    //     handleSubmit: PropTypes.func.isRequired,
    //     pristine: PropTypes.bool.isRequired,
    //     submitting: PropTypes.bool.isRequired
    // };
    renderRoom = (room) => (
        <option key={option} value={option}>
            {option}
        </option>
    );

    render() {
        const {rooms} = this.props;
        return (
            <div>
                {rooms.map(renderRoom)}
            </div>
        );
    }
}

export default RoomForm;
