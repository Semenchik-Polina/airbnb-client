import React, {Component} from 'react';
import {Field} from 'redux-form';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import './signup-form.scss';

class SignupForm extends Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <Field name="email" icon="icon-envelop" component={TextInput} type="email" placeholder="Email address" />
        <Field name="firstName" icon="icon-user" component={TextInput} type="text" placeholder="First name" />
        <Field name="lastName" icon="icon-user" component={TextInput} type="text" placeholder="Last name" />
        <Field name="password" icon="icon-lock" component={TextInput} type="password" placeholder="Create a Password" />
        <Button style="email" text="Sign up" />
      </form>
    );
  }
}

export default SignupForm;
