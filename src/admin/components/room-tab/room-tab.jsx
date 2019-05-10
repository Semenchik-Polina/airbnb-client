import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import history from '../../../shared/tools/history';

import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import RoomList from '../room-list/room-list';
import LoaderWrapper from '../../../shared/components/loader-wrapper/loader wrapper';

import Room from '../../../shared/models/room';

import './room-tab.scss';

class RoomTab extends PureComponent {
    static defaultProps = {
        roomTypes: null,
    };

    static propTypes = {
        deleteRoom: PropTypes.func.isRequired,
        fetchRoomTypes: PropTypes.func.isRequired,
        setEditableId: PropTypes.func.isRequired,
        unsetEditableId: PropTypes.func.isRequired,
        rooms: PropTypes.arrayOf(PropTypes.instanceOf(Room)).isRequired,
        roomTypes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }),
        ),
    };

    state = {
        isFormHidden: this.props.rooms.length > 0,
    };

    componentDidMount = () => {
        this.props.fetchRoomTypes();
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

    editRoom = (room) => {
        this.props.setEditableId(room.id);
        this.setState({
            isFormHidden: false,
        });
    };

    render() {
        const { rooms, deleteRoom } = this.props;
        const { isFormHidden } = this.state;

        return (
            <LoaderWrapper isLoading={!this.props.roomTypes}>
                <div className="room-tab">
                    {isFormHidden ? (
                        <div className="room-tab__content">
                            {rooms.length > 0 && (
                                <RoomList
                                    rooms={rooms}
                                    roomTypes={this.props.roomTypes}
                                    deleteRoom={deleteRoom}
                                    editRoom={this.editRoom}
                                />
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
            </LoaderWrapper>
        );
    }
}

export default RoomTab;
