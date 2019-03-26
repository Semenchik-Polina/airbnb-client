import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import history from '../../../shared/tools/history';

import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import RoomList from '../room-list/room-list';

import './room-tab.scss';

class RoomTab extends PureComponent {
    static propTypes = {
        deleteRoomType: PropTypes.func.isRequired,
        setEditableId: PropTypes.func.isRequired,
        unsetEditableId: PropTypes.func.isRequired,
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                capacity: PropTypes.number.isRequired,
                cost: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    state = {
        isFormHidden: this.props.rooms.length > 0,
    };

    hideForm = () => {
        this.setState({ isFormHidden: true });
    };

    showForm = () => {
        this.props.unsetEditableId();
        this.setState({ isFormHidden: false });
    };

    handleSubmit = () => {
        history.push('/admin-home/create-new-hotel/services');
    };

    editRoomType = (room) => {
        this.props.setEditableId(room.id);
        this.setState(() => ({
            isFormHidden: false,
        }));
    };

    render() {
        const { rooms, deleteRoomType } = this.props;
        const { isFormHidden } = this.state;

        return (
            <div className="room-tab">
                {isFormHidden ? (
                    <div className="room-tab__content">
                        {rooms.length > 0 && (
                            <RoomList rooms={rooms} deleteRoomType={deleteRoomType} editRoomType={this.editRoomType} />
                        )}
                        <div className="room-tab__content-buttons-container">
                            <Button
                                type="button"
                                className="room-tab__content-buttons-container-item"
                                color="white"
                                handleClick={this.showForm}
                            >
                                Add room
                            </Button>
                            {rooms.length > 0 && (
                                <Button
                                    className="room-tab__content-buttons-container-item"
                                    color="secondary"
                                    handleClick={this.handleSubmit}
                                >
                                    Continue
                                </Button>
                            )}
                        </div>
                    </div>
                ) : (
                    <RoomForm className="room-tab__content" hideForm={this.hideForm} />
                )}
            </div>
        );
    }
}

export default RoomTab;
