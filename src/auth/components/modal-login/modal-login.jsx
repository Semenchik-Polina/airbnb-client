import React, {Component, Fragment} from 'react';
import './modal-login.scss';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class ModalLogin extends Component {
  state = {
    showForm: false
  };

  showForm = () => {
    this.setState({showForm: true});
  };

  renderForm() {
    if (this.state.showForm) {
      return (
        <Fragment>
          <span>Sign up with Google</span>
          <span className="modal-login__inner-separator">or</span>
          <form className="modal-login__inner-form">
            <input className="modal-login__inner-form-input" type="text" name="email" placeholder="Email address" />
            <input className="modal-login__inner-form-input" type="text" name="firstName" placeholder="First name" />
            <input className="modal-login__inner-form-input" type="text" name="lastName" placeholder="Last name" />
            <input
              className="modal-login__inner-form-input"
              type="password"
              name="password"
              placeholder="Create a Password"
            />
            <button className="modal-login__inner-button modal-login__inner-button_email" onClick={this.showForm}>
              Sign up
            </button>
          </form>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <button className="modal-login__inner-button modal-login__inner-button_google">
          <img
            className="modal-login__inner-button-icon"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          Continue with Google
        </button>
        <span className="modal-login__inner-separator">or</span>
        <button className="modal-login__inner-button modal-login__inner-button_email" onClick={this.showForm}>
          <img className="modal-login__inner-button-icon" src="https://img.icons8.com/ios/50/000000/new-post/FFFFFF" />
          Sign up with Email
        </button>
      </Fragment>
    );
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal-login">
        <div className="modal-login__inner">
          <button className="modal-login__inner-button modal-login__inner-button_close" onClick={this.props.onClose}>
            <img className="modal-login__inner-button-close-image" src="https://img.icons8.com/ios/50/000000/delete-sign.png" />
          </button>
          {this.renderForm()}
          <span>Already have an Airbnb account?</span>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default ModalLogin;
