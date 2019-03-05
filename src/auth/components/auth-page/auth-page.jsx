import React, {Component} from 'react';
import Modal from '../../containers/modal-container';
import Menu from '../menu/menu';
import './auth-page.scss';

class AuthPage extends Component {
  state = {
    showModal: false
  };

  handleShowMessageClick = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <header>
        <Menu handleShowMessageClick={this.handleShowMessageClick} />
        {this.state.showModal ? <Modal onClose={this.handleCloseModal} /> : null}
      </header>
    );
  }
}

export default AuthPage;
