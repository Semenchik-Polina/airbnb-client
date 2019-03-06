import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/text-input/text-input';
import Button from '../../../shared/button/button';
import './signup-form.scss';

// can isRequired be used as validators.isRequired (no-named-as-default-member) ?
import { isRequired, isValidEmail, minLength8 } from '../../../shared/validators';

class SignupForm extends PureComponent {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <Field
                    validate={[isRequired, isValidEmail]}
                    name="email"
                    icon="icon-envelop"
                    component={TextInput}
                    type="email"
                    essence="Email"
                    placeholder="Email address"
                />
                <Field
                    validate={[isRequired]}
                    name="firstName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    essence="First name"
                    placeholder="First name"
                />
                <Field
                    validate={[isRequired]}
                    name="lastName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    essence="Last name"
                    placeholder="Last name"
                />
                <Field
                    validate={[isRequired, minLength8]}
                    name="password"
                    icon="icon-lock"
                    component={TextInput}
                    type="password"
                    essence="Password"
                    placeholder="Create a Password"
                />
                <Button buttonStyle="email" disabled={pristine || submitting} text="Sign up" />
            </form>
        );
    }
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default SignupForm;
