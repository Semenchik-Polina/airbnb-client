import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

import DropDownContent from '../dropdown-content/dropdown-content';

import 'react-day-picker/lib/style.css';
import './dropdown.scss';

class DropDown extends PureComponent {
    static defaultProps = {
        className: '',
        onClickOutside: () => {},
    };

    static propTypes = {
        className: PropTypes.string,
        onClickOutside: PropTypes.func,
    };

    state = {
        isPanelOpened: false,
    };

    handleClick = () => {
        this.setState(state => ({ isPanelOpened: !state.isPanelOpened }));
    };

    handleClickOutside = () => {
        if (this.state.isPanelOpened) {
            this.setState(state => ({ isPanelOpened: !state.isPanelOpened }));
        }
        this.props.onClickOutside();
    };

    render() {
        const { className, ...props } = this.props;
        const dropdownClasses = classNames('dropdown', className);

        return (
            <div className={dropdownClasses}>
                <DropDownContent
                    {...props}
                    handleClick={this.handleClick}
                    isPanelOpened={this.state.isPanelOpened}
                    handleClickOutside={this.handleClickOutside}
                />
                {this.state.isPanelOpened && <div className="dropdown__shadow" />}
            </div>
        );
    }
}

export default DropDown;
