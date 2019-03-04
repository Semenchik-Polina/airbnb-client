import React, {Component} from 'react';
import ModalLogin from '../components/login-form/modal-login';
import './auth.scss';
import ReactDOM from 'react-dom';

class Auth extends Component {
  state = {showModal: false};
  handleShowMessageClick = () => this.setState({showModal: true});
  handleCloseModal = () => this.setState({showModal: false});
  render() {
    return (
      <div >
        <div>
          <button onClick={this.handleShowMessageClick}>Sign up</button>
          {this.state.showModal ? (
            <ModalLogin onClose={this.handleCloseModal} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Auth;
