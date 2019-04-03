import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import 'react-day-picker/lib/style.css';
import './day-picker-dual-input.scss';

const classNames = {
    wrapper: 'DayPicker-wrapper',
    interactionDisabled: 'DayPicker--interactionDisabled day-picker-dual-input_interaction-disabled',
    months: 'DayPicker-Months day-picker-dual-input__months',
    month: 'DayPicker-Month day-picker-dual-input__month',
    navBar: 'DayPicker-NavBar',
    navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
    navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
    navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

    caption: 'DayPicker-Caption',
    weekdays: 'DayPicker-Weekdays',
    weekdaysRow: 'DayPicker-WeekdaysRow',
    weekday: 'DayPicker-Weekday',
    body: 'DayPicker-Body',
    week: 'DayPicker-Week',
    weekNumber: 'DayPicker-WeekNumber',
    day: 'DayPicker-Day day-picker-dual-input__calendar-day',
    footer: 'DayPicker-Footer',
    todayButton: 'DayPicker-TodayButton',

    today: 'DayPicker-Day--today',
    selected: 'DayPicker-Day--selected day-picker-dual-input__calendar-day_selected',
    disabled: 'DayPicker-Day--disabled day-picker-dual-input__calendar-day_disabled',
    outside: 'DayPicker-Day--outside day-picker-dual-input__calendar-day_outside',
};

class DayPickerDualInput extends PureComponent {
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

        return (
            <div className="day-picker-dual-input">
                <DayPickerInput
                    value={from}
                    placeholder="From"
                    format="MM/DD/YYYY"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    classNames={{
                        container: 'DayPickerInput day-picker-dual-input__item',
                        overlayWrapper: 'DayPickerInput-OverlayWrapper',
                        overlay: 'DayPickerInput-Overlay day-picker-dual-input__item-overlay',
                    }}
                    dayPickerProps={{
                        selectedDays: [from, { from, to }],
                        disabledDays: { after: to },
                        toMonth: to,
                        numberOfMonths: 1,
                        onDayClick: this.handleOnDayClick,
                        classNames,
                    }}
                    onDayChange={this.handleFromChange}
                />
                <span>{'—>'}</span>
                <span>
                    <DayPickerInput
                        ref={this.createToRef}
                        value={to}
                        placeholder="To"
                        format="MM/DD/YYYY"
                        formatDate={formatDate}
                        parseDate={parseDate}
                        classNames={{
                            container: 'DayPickerInput day-picker-dual-input__item day-picker-dual-input__item_to',
                            overlayWrapper: 'DayPickerInput-OverlayWrapper',
                            overlay: 'DayPickerInput-Overlay day-picker-dual-input__item-overlay',
                        }}
                        dayPickerProps={{
                            selectedDays: [from, { from, to }],
                            disabledDays: { before: from },
                            month: from,
                            fromMonth: from,
                            numberOfMonths: 1,
                            classNames,
                        }}
                        onDayChange={this.handleToChange}
                    />
                </span>
            </div>
        );
    }
}

export default DayPickerDualInput;
