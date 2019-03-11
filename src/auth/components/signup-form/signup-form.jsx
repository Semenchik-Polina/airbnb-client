import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import * as validators from '../../../shared/tools/validators';
import './signup-form.scss';

class SignupForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="signup-form" onSubmit={handleSubmit} noValidate>
                <Field
                    validate={[validators.isRequired, validators.isValidEmail]}
                    name="email"
                    icon="icon-envelop"
                    component={TextInput}
                    type="email"
                    essence="Email"
                    placeholder="Email Address"
                />
                <Field
                    validate={[validators.isRequired]}
                    name="firstName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    essence="First name"
                    placeholder="First name"
                />
                <Field
                    validate={[validators.isRequired]}
                    name="lastName"
                    icon="icon-user"
                    component={TextInput}
                    type="text"
                    essence="Last name"
                    placeholder="Last name"
                />
                <Field
                    validate={[validators.isRequired, validators.minLength8]}
                    name="password"
                    icon="icon-lock"
                    component={TextInput}
                    type="password"
                    essence="Password"
                    placeholder="Create a Password"
                />
                <Button className="email signup-form__submit" disabled={pristine || submitting}>
                    {'Sign up'}
                </Button>
            </form>
        );
    }
}

export default SignupForm;
