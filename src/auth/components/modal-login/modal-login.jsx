import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../containers/login-form-container';
import Button from '../../../shared/components/button/button';
import './modal-login.scss';

class ModalLogin extends PureComponent {
    static propTypes = {
        switchModalInner: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
    };

    submit = (values) => {
        this.props.login(values);
    };

    render() {
        const { switchModalInner } = this.props;
        return (
            <div className="modal-login">
                <Button
                    imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
                    href=""
                    className="modal-login__button modal-login__button_google"
                    isBehavedAsLink
                >
                    Log in with Google
                </Button>
                <span className="modal-login__separator">or</span>
                <LoginForm className="modal-login__form" onSubmit={this.submit} />
                <span className="modal-login__underliner" />
                <div className="modal-login__footer">
                    <span>Don`t have an account? </span>
                    <span className="modal-login__switch" onClick={switchModalInner}>
                        Sign up
                    </span>
                </div>
            </div>
        );
    }
}

export default ModalLogin;
