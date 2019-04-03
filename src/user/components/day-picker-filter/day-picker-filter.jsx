import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DayPicker, { DateUtils } from 'react-day-picker/DayPicker';

import 'react-day-picker/lib/style.css';
import './day-picker-filter.scss';

const classNames = {
    container: 'DayPicker day-picker-filter',
    wrapper: 'DayPicker-wrapper',
    interactionDisabled: 'DayPicker--interactionDisabled day-picker-filter_interaction-disabled',
    months: 'DayPicker-Months day-picker-filter__months',
    month: 'DayPicker-Month day-picker-filter__month',

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
    day: 'DayPicker-Day day-picker-filter__day',
    footer: 'DayPicker-Footer',
    todayButton: 'DayPicker-TodayButton',

    today: 'DayPicker-Day--today',
    selected: 'DayPicker-Day--selected day-picker-filter__day_selected',
    disabled: 'DayPicker-Day--disabled day-picker-filter__day_disabled',
    outside: 'DayPicker-Day--outside day-picker-filter__day_outside',
};

class DayPickerFilter extends PureComponent {
    static defaultProps = {
        from: undefined,
        to: undefined,
    };

    static propTypes = {
        onDayClick: PropTypes.func.isRequired,
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
    };

    handleDayClick = (day) => {
        const { from, to } = this.props;
        const range = DateUtils.addDayToRange(day, { from, to });
        this.props.onDayClick(range);
    };

    render() {
        const { from, to } = this.props;

        return (
            <DayPicker
                classNames={classNames}
                numberOfMonths={2}
                selectedDays={[from, { from, to }]}
                onDayClick={this.handleDayClick}
            />
        );
    }
}

export default DayPickerFilter;
