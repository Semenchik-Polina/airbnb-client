import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../../containers/signup-form-container';
import Button from '../../../shared/components/button/button';
import './modal-signup.scss';

class ModalSignup extends PureComponent {
    state = {
        showForm: false,
    };

    static propTypes = {
        switchModal: PropTypes.func.isRequired,
        signup: PropTypes.func.isRequired,
    };

    showForm = () => {
        this.setState({ showForm: true });
    };

    // async func
    submit = (values) => {
        this.props.signup(values).then(() => {
            this.props.switchModal();
        });
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
                    className="google"
                    isBehavedAsLink
                >
                    {'Continue with Google'}
                </Button>
                <span className="modal-signup__separator">or</span>
                <Button
                    imgSrc="https://img.icons8.com/ios/50/000000/new-post/FFFFFF"
                    className="email"
                    handleClick={this.showForm}
                    isBehavedAsButton
                >
                    {'Sign up with Email'}
                </Button>
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
                    <span className="modal-signup__switch" onClick={switchModal}>
                        {'Log in'}
                    </span>
                </div>
            </Fragment>
        );
    }
}

export default ModalSignup;
