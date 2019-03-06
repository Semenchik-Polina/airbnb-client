import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/text-input/text-input';
import Button from '../../../shared/button/button';
import './signup-form.scss';

// can isRequired be used as validators.isRequired (no-named-as-default-member) ?
import { isRequired } from '../../../shared/validators';

class SignupForm extends PureComponent {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="signup-form" onSubmit={handleSubmit}>
                <Field
                    validate={[isRequired]}
                    name="email"
                    icon="icon-envelop"
                    component={TextInput}
                    type="email"
                    placeholder="Email address"
                />
                <Field
                    validate={[isRequired]}
                    name="firstName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    placeholder="First name"
                />
                <Field
                    validate={[isRequired]}
                    name="lastName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    placeholder="Last name"
                />
                <Field
                    validate={[isRequired]}
                    name="password"
                    icon="icon-lock"
                    component={TextInput}
                    type="password"
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
