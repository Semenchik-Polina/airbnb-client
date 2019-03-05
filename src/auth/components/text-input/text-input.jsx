import React, {Component} from 'react';
import './text-input.scss';

class TextInput extends Component {
  render() {
    const {
      placeholder,
      icon,
      type,
      input: {onChange}
    } = this.props;
    return (
      <div className="text-input">
        <input className="text-input__input" onChange={(value) => onChange(value)} type={type} placeholder={placeholder} />
        {icon ? <span className={`text-input__icon ${icon}`} /> : null}
      </div>
    );
  }
}

export default TextInput;
