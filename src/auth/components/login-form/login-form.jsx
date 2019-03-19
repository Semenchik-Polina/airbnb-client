import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';

import * as validators from '../../../shared/tools/validators';

import './login-form.scss';

class LoginForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired,
    };

    render() {
        const {
            handleSubmit, pristine, submitting, login,
        } = this.props;

        return (
            <Form className="login-form" onSubmit={handleSubmit(login)} noValidate>
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
                <Button className="login-form__button login-form__button_email" disabled={pristine || submitting}>
                    {'Log in'}
                </Button>
            </Form>
        );
    }
}

export default LoginForm;
