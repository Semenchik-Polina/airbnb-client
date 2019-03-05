import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
import LoginForm from '../../containers/login-form-container';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  state = {
    showForm: false
  };

  showForm = () => {
    this.setState({showForm: true});
  };

  submit = (values) => {
    this.props.signup(values);
  }

  renderForm() {
    if (this.state.showForm) {
      return (
        <Fragment>
          <span>
            Sign up with <a>Google</a>
          </span>
          <span className="modal-login__inner-separator">or</span>
          <LoginForm onSubmit={this.submit}/>
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
          <span>
            <img
              className="modal-login__inner-button-icon"
              src="https://img.icons8.com/ios/50/000000/new-post/FFFFFF"
            />
          </span>
          <span className="modal-login__inner-button-text">Sign up with Email</span>
        </button>
      </Fragment>
    );
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal-login">
        <div className="modal-login__inner">
          <button className="modal-login__inner-button modal-login__inner-button_close" onClick={this.props.onClose}>
            <img
              className="modal-login__inner-button-close-image"
              src="https://img.icons8.com/ios/50/000000/delete-sign.png"
            />
          </button>
          {this.renderForm()}
          <span>Already have an Airbnb account?</span>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
