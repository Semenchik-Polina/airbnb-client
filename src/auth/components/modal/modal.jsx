import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
import ModalSignup from '../../containers/modal-signup-container';
import Button from '../button/button';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__inner">
          <Button
            imgSrc="https://img.icons8.com/ios/50/000000/delete-sign.png"
            style="close"
            handleClick={this.props.onClose}
          />
          {this.props.modalIndex ? null : <ModalSignup switchModal={this.props.switchModal} />}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
