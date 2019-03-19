import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import RoomList from '../room-list/room-list';

import './room-tab.scss';

class RoomTab extends PureComponent {
    static propTypes = {
        addRooms: PropTypes.func.isRequired,
        deleteRoomType: PropTypes.func.isRequired,
        destroyRoomForm: PropTypes.func.isRequired,
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                capacity: PropTypes.number.isRequired,
                id: PropTypes.number.isRequired,
            }),
        ).isRequired,
    };

    state = {
        isFormHidden: true,
    };

    hideForm = () => {
        this.setState({ isFormHidden: true });
        this.props.destroyRoomForm();
    };

    showForm = () => {
        this.setState({ isFormHidden: false });
    };

    handleSubmit = () => {
        this.props.addRooms(this.props.rooms);
    };

    render() {
        const { rooms, deleteRoomType } = this.props;
        const { isFormHidden } = this.state;

        return isFormHidden ? (
            <Fragment>
                {rooms.length > 0 && <RoomList rooms={rooms} deleteRoomType={deleteRoomType} />}
                <div className="room-tab__buttons-container">
                    <Button
                        type="button"
                        className="room-tab__buttons-container-item"
                        color="primary"
                        handleClick={this.showForm}
                    >
                        Add room
                    </Button>
                    {rooms.length > 0 && (
                        <Button
                            className="room-tab__buttons-container-item"
                            color="secondary"
                            handleClick={this.handleSubmit}
                        >
                            Continue
                        </Button>
                    )}
                </div>
            </Fragment>
        ) : (
            <RoomForm hideForm={this.hideForm} />
        );
    }
}

export default RoomTab;
