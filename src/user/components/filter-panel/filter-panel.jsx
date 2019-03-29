import React, { PureComponent } from 'react';
import moment from 'moment';

import DayPicker, { DateUtils } from 'react-day-picker/DayPicker';
import Counter from '../../../shared/components/counter/counter';
import DropDown from '../dropdown/dropdown';

import 'react-day-picker/lib/style.css';
import './filter-panel.scss';

class FilterPanel extends PureComponent {
    state = {
        from: undefined,
        to: undefined,
        adultGuests: 0,
    };

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleAdultGuestsPlusClick = () => {
        this.setState(state => ({
            adultGuests: state.adultGuests + 1,
        }));
    };

    handleAdultGuestsMinusClick = () => {
        if (this.state.adultGuests) {
            this.setState(state => ({
                adultGuests: state.adultGuests - 1,
            }));
        }
    };

    render() {
        const { from, to, adultGuests } = this.state;
        const modifiers = { start: from, end: to };

        const date = `${from ? moment(from).format('MMM D') : ''}${to ? ` — ${moment(to).format('MMM D')}` : ''}`;

        let guests;
        if (adultGuests) {
            guests = adultGuests === 1 ? '1 guest' : `${adultGuests} guests`;
        } else {
            guests = '';
        }

        return (
            <div className="filter-panel">
                <div className="filter-panel__parameters">
                    <DropDown defaultValue="Date" value={date} className="filter-panel__parameters-item">
                        <div className="InputFromTo">
                            <DayPicker
                                className="Selectable"
                                numberOfMonths={2}
                                selectedDays={[from, { from, to }]}
                                modifiers={modifiers}
                                onDayClick={this.handleDayClick}
                            />
                        </div>
                    </DropDown>
                    <DropDown defaultValue="Guests" value={guests} className="filter-panel__parameters-item">
                        <div className="filter-panel__parameters-item-container">
                            <div className="filter-panel__parameters-item-container-wrapper">
                                <span>Adults</span>
                                <Counter
                                    onPlusClick={this.handleAdultGuestsPlusClick}
                                    onMinusClick={this.handleAdultGuestsMinusClick}
                                    value={this.state.adultGuests}
                                />
                            </div>
                            <div className="filter-panel__parameters-item-container-wrapper">
                                <span>Children</span>
                                <Counter />
                            </div>
                        </div>
                    </DropDown>
                </div>
            </div>
        );
    }
}

export default FilterPanel;
