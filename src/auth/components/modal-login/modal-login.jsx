import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../containers/login-form-container';
import Button from '../../../shared/components/button/button';
import './modal-login.scss';

class ModalLogin extends PureComponent {
    static propTypes = {
        switchModalInner: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    submit = async (values) => {
        const { login } = this.props;
        try {
            await login(values);
            this.props.onClose();
        } catch (err) {
            // show error message
        }
    };

    render() {
        const { switchModalInner } = this.props;
        return (
            <Fragment>
                <Button
                    imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
                    href=""
                    className="modal-login__button modal-login__button_google"
                    isBehavedAsLink
                >
                    {'Log in with Google'}
                </Button>
                <span className="modal-login__separator">or</span>
                <LoginForm className="modal-login__form" onSubmit={this.submit} />
                <span className="modal-login__underliner" />
                <div className="modal-login__footer">
                    <span>Don`t have an account? </span>
                    <span className="modal-login__switch" onClick={switchModalInner}>
                        {'Sign up'}
                    </span>
                </div>
            </Fragment>
        );
    }
}

export default ModalLogin;
