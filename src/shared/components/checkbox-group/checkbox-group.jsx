import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox-group.scss';

class CheckboxGroup extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            }),
        ).isRequired,
        input: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
    };

    // transfer onChange () => {} to method
    renderCheckboxGroup() {
        const { options, input } = this.props;
        return options.map((option, index) => (
            <div className="checkbox" key={index}>
                <label htmlFor={`${input.name}[${index}]`}>
                    <input
                        type="checkbox"
                        name={`${input.name}[${index}]`}
                        id={`${input.name}[${index}]`}
                        value={option.name}
                        checked={input.value.indexOf(option.name) !== -1}
                        onChange={(event) => {
                            const newValue = [...input.value];
                            if (event.target.checked) {
                                newValue.push(option.name);
                            } else {
                                newValue.splice(newValue.indexOf(option.name), 1);
                            }

                            return input.onChange(newValue);
                        }}
                    />
                    <span>{option.name}</span>
                </label>
            </div>
        ));
    }

    render() {
        return <div>{this.renderCheckboxGroup()}</div>;
    }
}

export default CheckboxGroup;
