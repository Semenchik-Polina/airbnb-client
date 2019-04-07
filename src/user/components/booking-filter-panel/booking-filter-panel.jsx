import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SwitchFilter from '../switch-filter/switch-filter';
import AutosuggestInput from '../../../shared/components/autosuggest-input/autosuggest-input';
import FilterContent from '../filter-content/filter-content';

import './booking-filter-panel.scss';

class BookingFilterPanel extends PureComponent {
    static propTypes = {
        onSuggestionsFetchRequested: PropTypes.func.isRequired,
        onSuggestionsClearRequested: PropTypes.func.isRequired,
        clearSuggestions: PropTypes.func.isRequired,
        clearBookingLocation: PropTypes.func.isRequired,
        autosuggestValue: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        onInputChange: PropTypes.func.isRequired,
        switchBookingRelevance: PropTypes.func.isRequired,
        setBookingLocation: PropTypes.func.isRequired,
        bookingFilters: PropTypes.shape({
            location: PropTypes.shape({
                country: PropTypes.string,
                city: PropTypes.string,
            }).isRequired,
            isFutureBookingsFetched: PropTypes.bool.isRequired,
        }).isRequired,
    };

    componentWillUnmount = () => {
        this.props.clearSuggestions();
    };

    clearLocationFilter = () => {
        this.props.clearBookingLocation();
        this.props.clearSuggestions();
    };

    applyFilters = () => {};

    render() {
        const {
            autosuggestValue,
            suggestions,
            onInputChange,
            setBookingLocation,
            onSuggestionsFetchRequested,
            onSuggestionsClearRequested,
            switchBookingRelevance,
            bookingFilters: { location, isFutureBookingsFetched },
        } = this.props;

        const locationFilterLabel = location.country && location.city ? `${location.country}, ${location.city}` : '';

        return (
            <div className="booking-filter-panel">
                <div className="booking-filter-panel__parameters">
                    <SwitchFilter className="filter-panel__parameters-item" checked={isFutureBookingsFetched} onChange={switchBookingRelevance} />
                    <FilterContent
                        defaultValue="Location"
                        value={locationFilterLabel}
                        className="filter-panel__parameters-item"
                        onClearClick={this.clearLocationFilter}
                        onApplyClick={this.applyFilters}
                    >
                        <AutosuggestInput
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                            onChange={onInputChange}
                            value={autosuggestValue}
                            getSuggestionValue={setBookingLocation}
                        />
                    </FilterContent>
                </div>
            </div>
        );
    }
}

export default BookingFilterPanel;
