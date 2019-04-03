import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';
import DayPickerDualInput from '../day-picker-dual-input/day-picker-dual-input';

import 'react-day-picker/lib/style.css';
import './modal-booking.scss';

class ModalBooking extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    componentWillUnmount = () => {
        this.props.onClose();
    };

    render() {
        return (
            <Modal onClose={this.props.onClose} className="modal-booking">
                <span>Dates</span>
                <div className="modal-booking__date-pickers">
                    <DayPickerDualInput />
                </div>
                <Button color="purple">REQUEST TO BOOK</Button>
            </Modal>
        );
    }
}

export default ModalBooking;
