import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Autosuggest from 'react-autosuggest';
import DayPicker, { DateUtils } from 'react-day-picker/DayPicker';
import Counter from '../../../shared/components/counter/counter';
import DropDown from '../dropdown/dropdown';
import Button from '../../../shared/components/button/button';

import 'react-day-picker/lib/style.css';
import './filter-panel.scss';

class FilterPanel extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSuggestionsFetchRequested: PropTypes.func.isRequired,
        onSuggestionsClearRequested: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    };

    state = {
        from: undefined,
        to: undefined,
        guests: 0,
    };

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleGuestsPlusClick = () => {
        this.setState(state => ({
            guests: state.guests + 1,
        }));
    };

    handleGuestsMinusClick = () => {
        if (this.state.guests) {
            this.setState(state => ({
                guests: state.guests - 1,
            }));
        }
    };

    getSuggestionValue = suggestion => suggestion.name;

    renderSuggestion = suggestion => <span>{suggestion.name}</span>;

    render() {
        const { from, to, guests } = this.state;
        const {
            value, suggestions, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested,
        } = this.props;

        const modifiers = { start: from, end: to };
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange,
        };
        const date = `${from ? moment(from).format('MMM D') : ''}${to ? ` — ${moment(to).format('MMM D')}` : ''}`;

        let guestFilterLabel;
        if (guests) {
            guestFilterLabel = guests === 1 ? '1 guest' : `${guests} guests`;
        } else {
            guestFilterLabel = '';
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
                    <DropDown defaultValue="Guests" value={guestFilterLabel} className="filter-panel__parameters-item">
                        <div className="filter-panel__parameters-item-container">
                            <div className="filter-panel__parameters-item-container-wrapper">
                                <span>Guests</span>
                                <Counter
                                    onPlusClick={this.handleGuestsPlusClick}
                                    onMinusClick={this.handleGuestsMinusClick}
                                    value={this.state.guests}
                                />
                            </div>
                            {guests > 0 && (
                                <div className="filter-panel__parameters-item-container-buttons">
                                    <Button
                                        className="filter-panel__parameters-item-container-buttons-item"
                                        color="back"
                                    >
                                        Clear
                                    </Button>
                                    <Button
                                        className="filter-panel__parameters-item-container-buttons-item"
                                        color="back"
                                    >
                                        Apply
                                    </Button>
                                </div>
                            )}
                        </div>
                    </DropDown>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            </div>
        );
    }
}

export default FilterPanel;
