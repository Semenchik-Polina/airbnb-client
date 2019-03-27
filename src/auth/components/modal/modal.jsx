import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tool from '../../../shared/components/tool/tool';

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
                    <Tool
                        src="images/tools/delete.png"
                        className="modal__inner-button modal__inner-button_close"
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
