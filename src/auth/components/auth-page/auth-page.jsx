import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Modal from '../modal/modal';
import ModalSignup from '../../containers/modal-signup-container';
import ModalLogin from '../../containers/modal-login-container';
import Menu from '../../containers/menu-container';
import 'react-toastify/dist/ReactToastify.css';
import './auth-page.scss';

class AuthPage extends PureComponent {
    static propTypes = {
        switchModalInner: PropTypes.func.isRequired,
        isModalShown: PropTypes.bool.isRequired,
        showSignupModal: PropTypes.func.isRequired,
        showLoginModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
        isShowSignUp: PropTypes.bool.isRequired,
    };

    handleShowSignupModal = () => {
        this.props.showSignupModal();
    };

    handleShowLoginModal = () => {
        this.props.showLoginModal();
    };

    handleSwitchModalInner = () => {
        this.props.switchModalInner();
    };

    handleCloseModal = () => {
        this.props.hideModal();
    };

    render() {
        const { isModalShown, isShowSignUp } = this.props;
        return (
            <header>
                <ToastContainer autoClose={2000} />
                <Menu showSignupModal={this.handleShowSignupModal} showLoginModal={this.handleShowLoginModal} />
                {isModalShown && (
                    <Modal onClose={this.handleCloseModal}>
                        {isShowSignUp ? (
                            <ModalSignup switchModalInner={this.handleSwitchModalInner} />
                        ) : (
                            <ModalLogin
                                switchModalInner={this.handleSwitchModalInner}
                                onClose={this.handleCloseModal}
                            />
                        )}
                    </Modal>
                )}
            </header>
        );
    }
}

export default AuthPage;
