import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import DayPickerFilter from '../day-picker-filter/day-picker-filter';
import AutosuggestInput from '../../../shared/components/autosuggest-input/autosuggest-input';
import Counter from '../../../shared/components/counter/counter';
import FilterContent from '../filter-content/filter-content';

import 'react-day-picker/lib/style.css';
import './filter-panel.scss';

class FilterPanel extends PureComponent {
    static propTypes = {
        applyFilters: PropTypes.func.isRequired,
        incrementGuestsCount: PropTypes.func.isRequired,
        decrementGuestsCount: PropTypes.func.isRequired,
        onInputChange: PropTypes.func.isRequired,
        setLocation: PropTypes.func.isRequired,
        clearDateFilter: PropTypes.func.isRequired,
        clearGuestFilter: PropTypes.func.isRequired,
        clearLocationFilter: PropTypes.func.isRequired,
        onSuggestionsFetchRequested: PropTypes.func.isRequired,
        onSuggestionsClearRequested: PropTypes.func.isRequired,
        clearSuggestions: PropTypes.func.isRequired,
        autosuggestValue: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        setDateFilterRange: PropTypes.func.isRequired,
        guests: PropTypes.number.isRequired,
        dateRange: PropTypes.shape({
            from: PropTypes.instanceOf(Date),
            to: PropTypes.instanceOf(Date),
        }).isRequired,
        location: PropTypes.shape({
            country: PropTypes.string,
            city: PropTypes.string,
        }).isRequired,
    };

    componentWillUnmount = () => {
        this.props.clearSuggestions();
    };

    applyFilters = () => {
        this.props.applyFilters(this.props.filters);
    };

    render() {
        const {
            dateRange,
            guests,
            location,
            autosuggestValue,
            suggestions,
            onInputChange,
            onSuggestionsFetchRequested,
            onSuggestionsClearRequested,
            incrementGuestsCount,
            decrementGuestsCount,
            setDateFilterRange,
            setLocation,
            clearDateFilter,
            clearGuestFilter,
            clearLocationFilter,
        } = this.props;

        const dateLabel = `${dateRange.from ? moment(dateRange.from).format('MMM D') : ''}${
            dateRange.to ? ` — ${moment(dateRange.to).format('MMM D')}` : ''
        }`;

        let guestLabel;
        if (guests) {
            guestLabel = guests === 1 ? '1 guest' : `${guests} guests`;
        } else {
            guestLabel = '';
        }

        const locationFilterLabel = location.country && location.city ? `${location.country}, ${location.city}` : '';

        return (
            <div className="filter-panel">
                <div className="filter-panel__parameters">
                    <FilterContent
                        defaultValue="Date"
                        value={dateLabel}
                        className="filter-panel__parameters-item"
                        onClearClick={clearDateFilter}
                        onApplyClick={this.applyFilters}
                    >
                        <DayPickerFilter to={dateRange.to} from={dateRange.from} onDayClick={setDateFilterRange} />
                    </FilterContent>
                    <FilterContent
                        defaultValue="Guests"
                        value={guestLabel}
                        className="filter-panel__parameters-item"
                        onClearClick={clearGuestFilter}
                        onApplyClick={this.applyFilters}
                    >
                        <span>Guests</span>
                        <Counter
                            onPlusClick={incrementGuestsCount}
                            isMinusDisabled={guests === 0}
                            onMinusClick={decrementGuestsCount}
                            value={guests}
                        />
                    </FilterContent>
                    <FilterContent
                        defaultValue="Location"
                        value={locationFilterLabel}
                        className="filter-panel__parameters-item"
                        onClearClick={clearLocationFilter}
                        onApplyClick={this.applyFilters}
                    >
                        <AutosuggestInput
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            onChange={onInputChange}
                            value={autosuggestValue}
                            getSuggestionValue={setLocation}
                        />
                    </FilterContent>
                </div>
            </div>
        );
    }
}

export default FilterPanel;
