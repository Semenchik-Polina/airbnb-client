import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import RoomList from '../room-list/room-list';

import './room-tab.scss';

class RoomTab extends PureComponent {
    state = {
        hideForm: true,
    };

    static propTypes = {
        // addRooms: PropTypes.func.isRequired,
        addRoomType: PropTypes.func.isRequired,
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

    hideForm = () => {
        this.setState({ hideForm: true });
    };

    addRoomType = (values) => {
        this.props.addRoomType(values);
        this.showForm();
        this.props.destroyRoomForm();
    };

    handleSubmit = () => {
        // send data to server
        console.log('submit');
    };

    showForm = () => {
        this.setState(prevState => ({ hideForm: !prevState.hideForm }));
    };

    render() {
        const { rooms, deleteRoomType } = this.props;
        return (
            <div className="room-tab">
                {this.state.hideForm || (
                    <span className="room-tab__switch" onClick={this.showForm}>
                        {'Go back'}
                    </span>
                )}
                {(this.state.hideForm && (
                    <Fragment>
                        <RoomList rooms={rooms} deleteRoomType={deleteRoomType} />
                        <div className="room-tab__inner">
                            <Button type="button" className="room-tab__inner-button" handleClick={this.showForm}>
                                {'Add room'}
                            </Button>
                            {!rooms.length || (
                                <Button className="room-tab__inner-button" handleClick={this.handleSubmit}>
                                    {'Continue'}
                                </Button>
                            )}
                        </div>
                    </Fragment>
                )) || <RoomForm onSubmit={this.addRoomType} hideForm={this.hideForm} />}
            </div>
        );
    }
}

export default RoomTab;
