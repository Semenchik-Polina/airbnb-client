import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import * as validators from '../../../shared/tools/validators';
import './login-form.scss';

class LoginForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="login-form" onSubmit={handleSubmit} noValidate>
                <Field
                    validate={[validators.isRequired, validators.isValidEmail]}
                    className="login-form__field"
                    name="email"
                    icon="icon-envelop"
                    component={TextInput}
                    type="email"
                    essence="Email"
                    placeholder="Email Address"
                />
                <Field
                    validate={[validators.isRequired, validators.minLength8]}
                    className="login-form__field"
                    name="password"
                    icon="icon-lock"
                    component={TextInput}
                    type="password"
                    essence="Password"
                    placeholder="Password"
                />
                <Button className="email login-form__submit" disabled={pristine || submitting}>
                    {'Log in'}
                </Button>
            </form>
        );
    }
}

export default LoginForm;
