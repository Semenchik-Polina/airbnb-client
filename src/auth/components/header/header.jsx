import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../shared/components/modal/modal';
import ModalSignup from '../modal-signup/modal-signup';
import ModalLogin from '../modal-login/modal-login';
import Menu from '../../containers/menu-container';

import 'react-toastify/dist/ReactToastify.css';
import './header.scss';

class Header extends PureComponent {
    static propTypes = {
        isModalShown: PropTypes.bool.isRequired,
        showModal: PropTypes.func.isRequired,
        hideModal: PropTypes.func.isRequired,
        match: PropTypes.shape({
            isExact: PropTypes.bool.isRequired,
        }).isRequired,
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
            <header className="header">
                <Menu
                    showSignupModal={this.handleShowSignupModal}
                    showLoginModal={this.handleShowLoginModal}
                    isLight={!this.props.match.isExact}
                />
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

export default Header;
