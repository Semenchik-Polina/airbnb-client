import React, {Component} from 'react';
import ModalLogin from '../modal-login/modal-login';
import Header from '../header/header';
import './auth-page.scss';

class AuthPage extends Component {
  state = {showModal: false};

  handleShowMessageClick = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <header>
        <Header handleShowMessageClick={this.handleShowMessageClick} />
        {this.state.showModal ? <ModalLogin onClose={this.handleCloseModal} /> : null}
      </header>
    );
  }
}

export default AuthPage;
