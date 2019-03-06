import React, { Component } from 'react';
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
          input: { onChange },
      } = this.props;
      const { isFocused } = this.state;
      const textInputClasses = classNames('text-input', {
          'text-input_focused': isFocused,
      });
      return (
          <div className={textInputClasses}>
              <input
                  className="text-input__input"
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                  onChange={value => onChange(value)}
                  type={type}
                  placeholder={placeholder}
              />
              {icon ? <span className={`text-input__icon ${icon}`} /> : null}
          </div>
      );
  }
}

TextInput.defaultProps = {
    icon: undefined,
};

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired,
    input: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
    }).isRequired,
};

export default TextInput;
