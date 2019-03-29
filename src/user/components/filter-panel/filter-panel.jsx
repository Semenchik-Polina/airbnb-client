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
    };

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        const date = `${from ? moment(from).format('MMM D') : ''}${to ? ` — ${moment(to).format('MMM D')}` : ''}`;

        return (
            <div className="filter-panel">
                <div className="filter-panel__parameters">
                    <DropDown defaultValue="Date" value={date} className="filter-panel__parameters-item">
                        <div className="InputFromTo">
                            <DayPicker
                                className="Selectable"
                                numberOfMonths={1}
                                selectedDays={[from, { from, to }]}
                                modifiers={modifiers}
                                onDayClick={this.handleDayClick}
                            />
                        </div>
                    </DropDown>
                    <DropDown value="Guests" className="filter-panel__parameters-item">
                        <Counter />
                    </DropDown>
                </div>
            </div>
        );
    }
}

export default FilterPanel;
