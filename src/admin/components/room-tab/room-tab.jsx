import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import RoomForm from '../../containers/room-form-container';
import Button from '../../../shared/components/button/button';
import './room-tab.scss';

class RoomTab extends PureComponent {
    state = {
        hideForm: true
    };
    static propTypes = {
        addRooms: PropTypes.func.isRequired
    };

    handleSubmit = (values) => {
        console.log(values);
        this.props.addRooms(values);
        this.showForm();
    };

    showForm = () => {
        this.setState((prevState) => ({hideForm: !prevState.hideForm}));
    };

    render() {
        return (
            <div className="room-tab">
                {(this.state.hideForm && (
                    <Button type="button" handleClick={this.showForm}>
                        {'Add room'}
                    </Button>
                )) || <RoomForm onSubmit={this.handleSubmit} />}
            </div>
        );
    }
}

export default RoomTab;
