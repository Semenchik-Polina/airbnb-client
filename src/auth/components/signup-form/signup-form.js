import React, {Component} from 'react';
import {Field} from 'redux-form';
import './signup-form.scss';
import FormInput from '../form-input/form-input';

class SignupForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <Field
          name="email"
          icon="icon-envelop"
          component={FormInput}
          type="text"
          placeholder="Email address"
        />
        <Field
          name="firstName"
          icon="icon-user"
          component={FormInput}
          type="text"
          placeholder="First name"
        />
        <Field
          name="lastName"
          icon="icon-user"
          component={FormInput}
          type="text"
          placeholder="Last name"
        />
        <Field
          name="password"
          icon="icon-lock"
          component={FormInput}
          type="password"
          placeholder="Create a Password"
        />
        <button disabled={submitting} className="signup-form__button-submit signup-form__button-submit_email">
          Sign up
        </button>
      </form>
    );
  }
}

export default SignupForm;
