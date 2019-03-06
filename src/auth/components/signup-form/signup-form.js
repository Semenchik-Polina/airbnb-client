import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import './signup-form.scss';

class SignupForm extends PureComponent {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="signup-form" onSubmit={handleSubmit}>
                <Field name="email" icon="icon-envelop" component={TextInput} type="email" placeholder="Email address" />
                <Field name="firstName" icon="icon-user" component={TextInput} type="text" placeholder="First name" />
                <Field name="lastName" icon="icon-user" component={TextInput} type="text" placeholder="Last name" />
                <Field name="password" icon="icon-lock" component={TextInput} type="password" placeholder="Create a Password" />
                <Button buttonStyle="email" text="Sign up" />
            </form>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
