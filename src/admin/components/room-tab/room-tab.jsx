import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import history from '../../../shared/tools/history';

import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import RoomList from '../room-list/room-list';

import './room-tab.scss';

class RoomTab extends PureComponent {
    static propTypes = {
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
        isFormHidden: this.props.rooms.length > 0,
    };

    hideForm = () => {
        this.setState({ isFormHidden: true });
        this.props.destroyRoomForm();
    };

    showForm = () => {
        this.setState({ isFormHidden: false });
    };

    handleSubmit = () => {
        history.push('/admin-home/create-new-hotel/services');
    };

    render() {
        const { rooms, deleteRoomType } = this.props;
        const { isFormHidden } = this.state;

        return (
            <div className="room-tab">
                {isFormHidden ? (
                    <Fragment>
                        {rooms.length > 0 && <RoomList rooms={rooms} deleteRoomType={deleteRoomType} />}
                        <div className="room-tab__buttons-container">
                            <Button
                                type="button"
                                className="room-tab__buttons-container-item"
                                color="white"
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
                )}
            </div>
        );
    }
}

export default RoomTab;
