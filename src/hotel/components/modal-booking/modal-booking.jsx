import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';

import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';
import DayPickerDualInput from '../day-picker-dual-input/day-picker-dual-input';
import CounterInput from '../../../shared/components/counter-input/counter-input';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';

import 'react-day-picker/lib/style.css';
import './modal-booking.scss';

class ModalBooking extends PureComponent {
    static defaultProps = {
        selectedRoomType: null,
        guestsSelector: 0,
    };

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        requestBooking: PropTypes.func.isRequired,
        guestsSelector: PropTypes.number,
        initialValues: PropTypes.shape({
            roomType: PropTypes.shape({
                capacity: PropTypes.number.isRequired,
                cost: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
            }),
        }).isRequired,
        selectedRoomType: PropTypes.shape({
            capacity: PropTypes.number.isRequired,
            cost: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
        }),
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                capacity: PropTypes.number,
                cost: PropTypes.number,
                type: PropTypes.string,
            }),
        ).isRequired,
        changeGuestValue: PropTypes.func.isRequired,
    };

    getSnapshotBeforeUpdate = (prevProps) => {
        if (
            this.props.selectedRoomType
            && prevProps.selectedRoomType
            && this.props.selectedRoomType !== prevProps.selectedRoomType
        ) {
            if (this.props.guestsSelector > this.props.selectedRoomType.capacity) {
                return this.props.selectedRoomType.capacity;
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
        const { handleSubmit, rooms, selectedRoomType } = this.props;

        return (
            <Modal onClose={this.props.onClose} className="modal-booking">
                <Form className="modal-booking__form" onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="modal-booking__date-pickers modal-booking__form-section">
                        <Field component={DayPickerDualInput} name="dates" />
                    </div>
                    <div className="modal-booking__form-section">
                        <span className="modal-booking__form-section-summary">Guests</span>
                        <Field
                            component={CounterInput}
                            name="guests"
                            maxValue={selectedRoomType && +selectedRoomType.capacity}
                        />
                    </div>
                    <div className="modal-booking__form-section">
                        <Field
                            className="modal-booking__form-section-item"
                            component={DropDownSelect}
                            name="roomType"
                            options={rooms}
                            handleRoomTypeOnChange={this.handleRoomTypeOnChange}
                        />
                    </div>
                    <Button color="purple">REQUEST TO BOOK</Button>
                </Form>
            </Modal>
        );
    }
}

export default ModalBooking;
