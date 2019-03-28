import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tool from '../tool/tool';

import './modal.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        className: PropTypes.string,
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    render() {
        const { children, onClose, className } = this.props;

        const modalInnerClasses = classNames('modal__inner', className);

        return ReactDOM.createPortal(
            <div className="modal">
                <div className={modalInnerClasses}>
                    <Tool
                        src="/images/tools/delete.png"
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
