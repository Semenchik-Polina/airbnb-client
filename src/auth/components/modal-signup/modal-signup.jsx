import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import SignupForm from '../../containers/signup-form-container';
import Button from '../../../shared/components/button/button';

import './modal-signup.scss';

class ModalSignup extends PureComponent {
    static propTypes = {
        switchModalInner: PropTypes.func.isRequired,
    };

    state = {
        showForm: false,
    };

    showForm = () => {
        this.setState({ showForm: true });
    };

    renderForm() {
        const { showForm } = this.state;

        return showForm ? (
            <Fragment>
                <div>
                    <span>Sign up with </span>
                    <a className="modal-signup__switch">Google</a>
                </div>
                <span className="modal-signup__separator">or</span>
                <SignupForm />
            </Fragment>
        ) : (
            <Fragment>
                <Button
                    imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
                    href=""
                    color="white"
                    isBehavedAsLink
                >
                    Continue with Google
                </Button>
                <span className="modal-signup__separator">or</span>
                <Button
                    imgSrc="https://img.icons8.com/ios/50/000000/new-post/FFFFFF"
                    color="primary"
                    handleClick={this.showForm}
                >
                    Sign up with Email
                </Button>
            </Fragment>
        );
    }

    render() {
        const { switchModalInner } = this.props;

        return (
            <div className="modal-signup">
                {this.renderForm()}
                <span className="modal-signup__underliner" />
                <div className="modal-signup__footer">
                    <span>Already have an Airbnb account? </span>
                    <span className="modal-signup__switch" onClick={switchModalInner}>
                        Log in
                    </span>
                </div>
            </div>
        );
    }
}

export default ModalSignup;
