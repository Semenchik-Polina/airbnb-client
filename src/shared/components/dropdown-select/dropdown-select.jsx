import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

class DropDownSelect extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        className: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            onBlur: PropTypes.func.isRequired,
            value: PropTypes.string,
        }).isRequired,
    };

    handleOnChange = option => this.props.input.onChange(option.value);

    render() {
        const { options, className } = this.props;
        const selectClasses = classNames('dropdown-select', {
            [`${className}`]: className,
        });

        const customStyles = {
            input: provided => ({
                ...provided,
                paddingTop: 10,
                paddingBottom: 10,
            }),
            control: provided => ({
                ...provided,
                boxShadow: 'none',
            }),
        };

        return (
            <Select
                styles={customStyles}
                options={options}
                className={selectClasses}
                defaultValue={options[0]}
                isSearchable
                onChange={this.handleOnChange}
            />
        );
    }
}

export default DropDownSelect;
