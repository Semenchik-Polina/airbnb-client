import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import Modal from '../../../shared/components/modal/modal';

import './modal-timeout.scss';

class ModalTimeout extends PureComponent {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    };

    componentWillUnmount = () => {
        this.props.onClose();
    };

    render() {
        const { onClose } = this.props;

        return (
            <Modal onClose={onClose} className="modal-booking">
                <span>Your time is over, the request was nulled</span>
                <Button color="purple" handleClick={onClose}>
                    OK
                </Button>
            </Modal>
        );
    }
}

export default ModalTimeout;
