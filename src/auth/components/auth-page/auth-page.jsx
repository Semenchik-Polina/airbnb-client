import React, { PureComponent } from 'react';
import Modal from '../modal/modal';
import ModalSignup from '../../containers/modal-signup-container';
import ModalLogin from '../../containers/modal-login-container';
import Menu from '../menu/menu';
import './auth-page.scss';

class AuthPage extends PureComponent {
    state = {
        showModal: false,
        isShowSignUp: true,
    };

    handleShowSignupModal = () => {
        this.setState({ showModal: true, isShowSignUp: true });
    };

    handleShowLoginModal = () => {
        this.setState({ showModal: true, isShowSignUp: false });
    };

    handleSwitchModals = () => {
        this.setState(prevState => ({ isShowSignUp: !prevState.isShowSignUp }));
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { showModal, isShowSignUp } = this.state;
        return (
            <header>
                <Menu showSignupModal={this.handleShowSignupModal} showLoginModal={this.handleShowLoginModal} />
                {showModal && (
                    <Modal onClose={this.handleCloseModal}>
                        {(isShowSignUp && <ModalSignup switchModal={this.handleSwitchModals} />) || (
                            <ModalLogin switchModal={this.handleSwitchModals} />
                        )}
                    </Modal>
                )}
            </header>
        );
    }
}

export default AuthPage;
