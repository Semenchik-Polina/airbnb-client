import React, {Component} from 'react';
import './form-input.scss';

class FormInput extends Component {
  render() {
    const {
      placeholder,
      icon,
      input: {onChange}
    } = this.props;
    return (
      <div className="form-wrapper">
        <input className="form__input" onChange={(value) => onChange(value)} placeholder={placeholder} />
        {icon ? <span className={`form__icon ${icon}`} /> : null}
      </div>
    );
  }
}

export default FormInput;
