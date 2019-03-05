import React, {Component, Fragment} from 'react';
import './modal-signup.scss';
import SignupForm from '../../containers/signup-form-container';
import Button from '../button/button';

class ModalSignup extends Component {
  state = {
    showForm: false
  };

  showForm = () => {
    this.setState({showForm: true});
  };

  submit = (values) => {
    console.log(values);
    this.props.signup(values);
  };

  renderForm() {
    if (this.state.showForm) {
      return (
        <Fragment>
          <span>
            Sign up with <a>Google</a>
          </span>
          <span className="modal__inner-separator">or</span>
          <SignupForm onSubmit={this.submit} />
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Button
          imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
          href=""
          style="google"
          isBehavedAsLink
          text="Continue with Google"
        />
        <span className="modal__inner-separator">or</span>
        <Button
          imgSrc="https://img.icons8.com/ios/50/000000/new-post/FFFFFF"
          style="email"
          handleClick={this.showForm}
          isBehavedAsButton={true}
          text="Sign up with Email"
        />
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderForm()}
        <div>
          <span>Already have an Airbnb account?</span>
          <span onClick={this.props.switchModal}>Sign in</span>
        </div>
      </Fragment>
    );
  }
}

export default ModalSignup;
