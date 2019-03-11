import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../../../shared/components/button/button';
import './modal.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        onClose: PropTypes.func.isRequired,
    };

    render() {
        const { children, onClose } = this.props;
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__inner">
                    <Button
                        imgSrc="https://img.icons8.com/ios/50/000000/delete-sign.png"
                        buttonStyle="close"
                        handleClick={onClose}
                    />
                    {children}
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
