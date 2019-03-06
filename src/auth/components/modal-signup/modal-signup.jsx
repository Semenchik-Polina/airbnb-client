import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import './modal-signup.scss';
import SignupForm from '../../containers/signup-form-container';
import Button from '../../../shared/components/button/button';

class ModalSignup extends PureComponent {
    state = {
        showForm: false,
    };

    showForm = () => {
        this.setState({ showForm: true });
    };

    submit = (values) => {
        const { signup } = this.props;
        signup(values);
    };

    renderForm() {
        const { showForm } = this.state;
        if (showForm) {
            return (
                <Fragment>
                    <div>
                        <span>Sign up with </span>
                        <a className="modal-signup__switch">Google</a>
                    </div>
                    <span className="modal-signup__separator">or</span>
                    <SignupForm className="modal-signup__form" onSubmit={this.submit} />
                </Fragment>
            );
        }
        return (
            <Fragment>
                <Button
                    imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
                    href=""
                    buttonStyle="google"
                    isBehavedAsLink
                    text="Continue with Google"
                />
                <span className="modal-signup__separator">or</span>
                <Button
                    imgSrc="https://img.icons8.com/ios/50/000000/new-post/FFFFFF"
                    buttonStyle="email"
                    handleClick={this.showForm}
                    isBehavedAsButton
                    text="Sign up with Email"
                />
            </Fragment>
        );
    }

    render() {
        const { switchModal } = this.props;
        return (
            <Fragment>
                {this.renderForm()}
                <span className="modal-signup__underliner" />
                <div className="modal-signup__footer">
                    <span>Already have an Airbnb account? </span>
                    <span className="modal-signup__switch" onClick={switchModal}>Log in</span>
                </div>
            </Fragment>
        );
    }
}

ModalSignup.propTypes = {
    switchModal: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
};

export default ModalSignup;
