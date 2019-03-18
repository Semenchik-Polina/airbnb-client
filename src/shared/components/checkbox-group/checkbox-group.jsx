import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/checkbox-materialize-css.scss'; // is it ok?

class CheckboxGroup extends PureComponent {
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

    handleChange = (option, input) => (event) => {
        const newValue = [...input.value];

        if (event.target.checked) {
            newValue.push(option.name);
        } else {
            newValue.splice(newValue.indexOf(option.name), 1);
        }

        return input.onChange(newValue);
    };

    render() {
        const { options, input } = this.props;
        return (
            <div>
                {options.map((option, index) => (
                    <div className="checkbox" key={index}>
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
                ))}
            </div>
        );
    }
}

export default CheckboxGroup;
