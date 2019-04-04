import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';

import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';
import DayPickerDualInput from '../day-picker-dual-input/day-picker-dual-input';
import CounterInput from '../counter-input/counter-input';
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
        roomTypes: PropTypes.arrayOf(
            PropTypes.shape({
                capacity: PropTypes.number,
                cost: PropTypes.number,
                type: PropTypes.string,
            }),
        ).isRequired,
        changeGuestValue: PropTypes.func.isRequired,
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedRoomType && this.props.selectedRoomType !== nextProps.selectedRoomType) {
            if (this.props.guestsSelector > nextProps.selectedRoomType.capacity) {
                this.props.changeGuestValue(nextProps.selectedRoomType.capacity);
            }
        }
    }

    componentWillUnmount = () => {
        this.props.onClose();
    };

    handleSubmit = (values) => {
        this.props.requestBooking(values);
    };

    render() {
        const { handleSubmit, roomTypes, selectedRoomType } = this.props;

        return (
            <Modal onClose={this.props.onClose} className="modal-booking">
                <span>Dates</span>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="modal-booking__date-pickers">
                        <Field component={DayPickerDualInput} name="dates" />
                    </div>
                    <Field
                        component={CounterInput}
                        name="guests"
                        maxValue={selectedRoomType && +selectedRoomType.capacity}
                    />
                    <Field
                        component={DropDownSelect}
                        name="roomType"
                        options={roomTypes}
                        handleRoomTypeOnChange={this.handleRoomTypeOnChange}
                    />
                    <Button color="purple">REQUEST TO BOOK</Button>
                </Form>
            </Modal>
        );
    }
}

export default ModalBooking;
