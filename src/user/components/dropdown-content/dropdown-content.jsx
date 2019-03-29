import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import onClickOutside from 'react-onclickoutside';

import Button from '../../../shared/components/button/button';

import 'react-day-picker/lib/style.css';
import './dropdown-content.scss';

class DropDownContent extends PureComponent {
    static defaultProps = {
        value: '',
    };

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        value: PropTypes.string,
        defaultValue: PropTypes.string.isRequired,
        handleClickOutside: PropTypes.func.isRequired,
        handleClick: PropTypes.func.isRequired,
        isPanelOpened: PropTypes.bool.isRequired,
    };

    handleClickOutside = () => {
        this.props.handleClickOutside();
    };

    render() {
        const {
            children, defaultValue, value, handleClick, isPanelOpened,
        } = this.props;

        return (
            <div className="dropdown-content">
                <Button
                    className="dropdown-content__button"
                    color={isPanelOpened || value ? 'secondary' : 'white'}
                    handleClick={handleClick}
                >
                    {value || defaultValue}
                </Button>
                {isPanelOpened && <div className="dropdown-content__panel">{children}</div>}
            </div>
        );
    }
}

export default onClickOutside(DropDownContent);
