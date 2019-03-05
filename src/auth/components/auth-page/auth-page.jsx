import React, {Component} from 'react';
import Modal from '../modal/modal';
import Menu from '../menu/menu';
import './auth-page.scss';

class AuthPage extends Component {
  state = {
    showModal: false,
    modalIndex: 0
  };

  handleShowSignupModal = () => {
    this.setState({showModal: true, modalIndex: 0});
  };

  handleShowLoginModal = () => {
    this.setState({showModal: true, modalIndex: 1});
  };

  handleSwitchModals = () => {
    this.setState({modalIndex: this.state.modalIndex ? 0 : 1});
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <header>
        <Menu handleShowSignupModal={this.handleShowSignupModal} handleShowLoginModal={this.handleShowLoginModal} />
        {this.state.showModal ? <Modal onClose={this.handleCloseModal} switchModal={this.handleSwitchModals} modalIndex={this.state.modalIndex} /> : null}
      </header>
    );
  }
}

export default AuthPage;
