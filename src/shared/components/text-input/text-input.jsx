import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './text-input.scss';

class TextInput extends Component {
    state = {
        isFocused: false,
    };

    static defaultProps = {
        icon: undefined,
    };

    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        icon: PropTypes.string,
        type: PropTypes.string.isRequired,
        essence: PropTypes.string.isRequired,
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            onBlur: PropTypes.func.isRequired,
            value: PropTypes.string,
        }).isRequired,
        meta: PropTypes.shape({
            touched: PropTypes.bool.isRequired,
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

    render() {
        const {
            placeholder,
            icon,
            essence,
            type,
            meta: { touched, error, warning },
            input: { onChange, value },
        } = this.props;
        const { isFocused } = this.state;
        const textInputClasses = classNames('text-input', {
            'text-input_focused': isFocused,
            'text-input_invalid': error && touched,
        });
        return (
            <div>
                <div className={textInputClasses}>
                    <input
                        className="text-input__input"
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        onChange={onChange}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                    />
                    {icon && <span className={`text-input__icon ${icon}`} />}
                </div>
                {touched
                    && ((error && <span className="text-input__error">{`${essence} ${error}`}</span>)
                        || (warning && <span className="text-input__warning">{`${essence} ${warning}`}</span>))}
            </div>
        );
    }
}

export default TextInput;