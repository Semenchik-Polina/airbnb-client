import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './dropdown-select.scss';

class DropDownSelect extends PureComponent {
    state = {
        isFocused: false,
    };

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

    handleBlur = () => {
        const {
            input: { onBlur },
        } = this.props;
        onBlur();
        this.setState({ isFocused: false });
    };

    handleFocus = () => {
        this.setState({ isFocused: true });
    };

    renderSelectOptions = option => (
        <option key={option} value={option}>
            {option}
        </option>
    );

    render() {
        const {
            className,
            input: { onChange, value },
        } = this.props;
        const { isFocused } = this.state;
        const textInputClasses = classNames('dropdown-select', {
            'dropdown-select_focused': isFocused,
            [`${className}`]: className,
        });
        return (
            <div>
                <select
                    className={textInputClasses}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={onChange}
                    value={value}
                >
                    {this.props.options.map(this.renderSelectOptions)}
                </select>
            </div>
        );
    }
}

export default DropDownSelect;
