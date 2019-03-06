import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './text-input.scss';
import classNames from 'classnames';

class TextInput extends Component {
  state = {
      isFocused: false,
  };

  handleBlur = () => {
      this.setState({ isFocused: false });
  };

  handleFocus = () => {
      this.setState({ isFocused: true });
  };

  render() {
      const {
          placeholder,
          icon,
          type,
          meta: { touched, error, warning },
          input: { onChange, onBlur, value },
      } = this.props;
      const { isFocused } = this.state;
      const textInputClasses = classNames('text-input', {
          'text-input_focused': isFocused,
      });
      return (
          <Fragment>
              <div className={textInputClasses}>
                  <input
                      className="text-input__input"
                      onBlur={() => {
                          onBlur();
                          this.handleBlur();
                      }}
                      onFocus={this.handleFocus}
                      onChange={onChange}
                      type={type}
                      value={value}
                      placeholder={placeholder}
                  />
                  {icon ? <span className={`text-input__icon ${icon}`} /> : null}
              </div>
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </Fragment>
      );
  }
}

TextInput.defaultProps = {
    icon: undefined,
};

// meta: { touched, error, warning }
// eslint do not fire warnings, but i am not describing all meta fields in propTypes

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired,
    input: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired,
        value: PropTypes.string,
    }).isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
    }).isRequired,
};

export default TextInput;
