import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';

import 'react-day-picker/lib/style.css';
import './modal-booking.scss';

class ModalBooking extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    state = {
        from: undefined,
        to: undefined,
    };

    componentWillUnmount = () => {
        this.props.onClose();
    };

    showFromMonth = () => {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    };

    handleFromChange = (from) => {
        this.setState({ from });
    };

    handleToChange = (to) => {
        this.setState({ to }, this.showFromMonth);
    };

    createToRef = (el) => {
        this.to = el;
    };

    handleOnDayClick = () => {
        this.to.getInput().focus();
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        return (
            <Modal onClose={this.props.onClose} className="modal-booking">
                <span>Dates</span>
                <div className="modal-booking__date-pickers">
                    <div className="InputFromTo">
                        <DayPickerInput
                            value={from}
                            placeholder="From"
                            format="MM/DD/YYYY"
                            formatDate={formatDate}
                            parseDate={parseDate}
                            dayPickerProps={{
                                selectedDays: [from, { from, to }],
                                disabledDays: { after: to },
                                toMonth: to,
                                modifiers,
                                numberOfMonths: 1,
                                onDayClick: this.handleOnDayClick,
                            }}
                            onDayChange={this.handleFromChange}
                        />
                        <span>{'—>'}</span>
                        <span className="InputFromTo-to">
                            <DayPickerInput
                                ref={this.createToRef}
                                value={to}
                                placeholder="To"
                                format="MM/DD/YYYY"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
                                    selectedDays: [from, { from, to }],
                                    disabledDays: { before: from },
                                    modifiers,
                                    month: from,
                                    fromMonth: from,
                                    numberOfMonths: 1,
                                }}
                                onDayChange={this.handleToChange}
                            />
                        </span>
                    </div>
                </div>
                <Button color="purple">REQUEST TO BOOK</Button>
            </Modal>
        );
    }
}

export default ModalBooking;
