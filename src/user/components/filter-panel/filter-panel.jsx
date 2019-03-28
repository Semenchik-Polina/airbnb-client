import React, { PureComponent } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker/DayPicker';
import Button from '../../../shared/components/button/button';

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

        return (
            <div className="filter-panel">
                <div className="filter-panel__search-panel">
                    <div className="filter-panel__date-pickers">
                        <div className="filter-panel__parameters">
                            <Button className="filter-panel__parameters-item" color="white">Dates</Button>
                            <Button className="filter-panel__parameters-item" color="white">Guests</Button>
                        </div>
                        <div className="InputFromTo">
                            <DayPicker
                                className="Selectable"
                                numberOfMonths={1}
                                selectedDays={[from, { from, to }]}
                                modifiers={modifiers}
                                onDayClick={this.handleDayClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterPanel;
