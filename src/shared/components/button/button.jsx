/* eslint-disable react/button-has-type */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

class Button extends PureComponent {
    static defaultProps = {
        handleClick: () => {},
        isBehavedAsLink: false,
        children: '',
        imgSrc: '',
        href: '',
        type: 'submit',
        className: '',
        color: '',
    };

    static propTypes = {
        handleClick: PropTypes.func,
        isBehavedAsLink: PropTypes.bool,
        children: PropTypes.string,
        color: PropTypes.string,
        imgSrc: PropTypes.string,
        href: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.oneOf(['submit', 'button', 'reset']),
    };

    renderButtonIcon = imgSrc => imgSrc && (
        <span>
            <img className="button__icon" src={imgSrc} alt="icon" />
        </span>
    );

    renderButtonChildren = children => children && <span className="button__text">{children}</span>;

    render() {
        const {
            handleClick, isBehavedAsLink, children, imgSrc, href, className, type, color,
        } = this.props;

        const buttonClasses = classNames('button', { [`button_${color}`]: color }, className);

        return isBehavedAsLink ? (
            <a className={buttonClasses} href={href} target="_blank" rel="noopener noreferrer">
                {this.renderButtonIcon(imgSrc)}
                {this.renderButtonChildren(children)}
            </a>
        ) : (
            <button type={type} className={buttonClasses} onClick={handleClick}>
                {this.renderButtonIcon(imgSrc)}
                {this.renderButtonChildren(children)}
            </button>
        );
    }
}

export default Button;
