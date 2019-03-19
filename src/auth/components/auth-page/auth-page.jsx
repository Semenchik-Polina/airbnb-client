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
        isModalShown: PropTypes.bool.isRequired,
        showModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
    };

    state = {
        isShowSignUp: true,
    };

    handleShowSignupModal = () => {
        this.setState({ isShowSignUp: true });
        this.props.showModal();
    };

    handleShowLoginModal = () => {
        this.setState({ isShowSignUp: false });
        this.props.showModal();
    };

    handleSwitchModalInner = () => {
        this.setState(prevState => ({ isShowSignUp: !prevState.isShowSignUp }));
    };

    handleCloseModal = () => {
        this.props.hideModal();
    };

    render() {
        const { isModalShown } = this.props;
        const { isShowSignUp } = this.state;
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
