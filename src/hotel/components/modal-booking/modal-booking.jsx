import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';

import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';
import DayPickerDualInput from '../day-picker-dual-input/day-picker-dual-input';
import CounterInput from '../../../shared/components/counter-input/counter-input';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import LoaderWrapper from '../../../shared/components/loader-wrapper/loader wrapper';

import Room from '../../../shared/models/room';

import 'react-day-picker/lib/style.css';
import './modal-booking.scss';

class ModalBooking extends PureComponent {
    static defaultProps = {
        selectedRoom: null,
        guestsSelector: 0,
    };

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        requestBooking: PropTypes.func.isRequired,
        guestsSelector: PropTypes.number,
        selectedRoom: PropTypes.instanceOf(Room),
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.instanceOf(Room),
                label: PropTypes.string,
            }),
        ).isRequired,
        changeGuestValue: PropTypes.func.isRequired,
    };

    getSnapshotBeforeUpdate = (prevProps) => {
        if (this.props.selectedRoom && prevProps.selectedRoom && this.props.selectedRoom !== prevProps.selectedRoom) {
            if (this.props.guestsSelector > this.props.selectedRoom.capacity) {
                return this.props.selectedRoom.capacity;
            }
        }
        return null;
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (snapshot !== null) {
            this.props.changeGuestValue(snapshot);
        }
    };

    componentWillUnmount = () => {
        this.props.onClose();
    };

    handleSubmit = (values) => {
        this.props.requestBooking(values);
    };

    render() {
        const { handleSubmit, rooms, selectedRoom } = this.props;

        return (
            <Modal onClose={this.props.onClose} className="modal-booking">
                <LoaderWrapper isLoading={false}>
                    <Form className="modal-booking__form" onSubmit={handleSubmit(this.handleSubmit)}>
                        <div className="modal-booking__date-pickers modal-booking__form-section">
                            <Field component={DayPickerDualInput} name="dates" />
                        </div>
                        <div className="modal-booking__form-section">
                            <span className="modal-booking__form-section-summary">Guests</span>
                            <Field
                                component={CounterInput}
                                name="guests"
                                maxValue={selectedRoom && +selectedRoom.capacity}
                            />
                        </div>
                        <div className="modal-booking__form-section">
                            <Field
                                className="modal-booking__form-section-item"
                                component={DropDownSelect}
                                name="room"
                                options={rooms}
                                handleRoomTypeOnChange={this.handleRoomTypeOnChange}
                            />
                        </div>
                        <Button color="purple">REQUEST TO BOOK</Button>
                    </Form>
                </LoaderWrapper>
            </Modal>
        );
    }
}

export default ModalBooking;
