import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './checkbox-group.scss';

class CheckboxGroup extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            }),
        ).isRequired,
        input: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        className: PropTypes.string,
    };

    handleChange = (option, input) => (event) => {
        const newValue = [...input.value];

        if (event.target.checked) {
            newValue.push(option.name);
        } else {
            newValue.splice(newValue.indexOf(option.name), 1);
        }

        return input.onChange(newValue);
    };

    renderCheckbox = input => (option, index) => (
        <div className="checkbox-group__item" key={index}>
            <label htmlFor={`${input.name}[${index}]`}>
                <input
                    type="checkbox"
                    name={`${input.name}[${index}]`}
                    id={`${input.name}[${index}]`}
                    value={option.name}
                    checked={input.value.indexOf(option.name) !== -1}
                    onChange={this.handleChange(option, input)}
                />
                <span>{option.name}</span>
            </label>
        </div>
    );

    render() {
        const { options, input, className } = this.props;

        const checkboxGroupClasses = classNames('checkbox-group', className);

        return (
            <div className={checkboxGroupClasses}>
                {options.map(this.renderCheckbox(input))}
            </div>
        );
    }
}

export default CheckboxGroup;
