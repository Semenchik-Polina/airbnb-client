import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../containers/login-form-container';
import Button from '../../../shared/components/button/button';
import './modal-login.scss';

class ModalLogin extends PureComponent {
    static propTypes = {
        switchModal: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
    };

    submit = (values) => {
        const { login } = this.props;
        login(values);
    };

    render() {
        const { switchModal } = this.props;
        return (
            <Fragment>
                <Button
                    imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
                    href=""
                    buttonStyle="google"
                    isBehavedAsLink
                    text="Log in with Google"
                />
                <span className="modal-login__separator">or</span>
                <LoginForm className="modal-login__form" onSubmit={this.submit} />
                <span className="modal-login__underliner" />
                <div className="modal-login__footer">
                    <span>Don`t have an Airbnb account? </span>
                    <span className="modal-login__switch" onClick={switchModal}>Sign up</span>
                </div>
            </Fragment>
        );
    }
}

export default ModalLogin;
