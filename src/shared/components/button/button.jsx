/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

const Button = (props) => {
    const {
        handleClick, isBehavedAsLink, children, imgSrc, href, className, type,
    } = props;
    const buttonClasses = classNames('button', {
        [`${className}`]: className,
    });
    if (!isBehavedAsLink) {
        return (
            <button type={type} className={buttonClasses} onClick={handleClick}>
                {imgSrc && (
                    <span>
                        <img className="button__icon" src={imgSrc} alt="icon" />
                    </span>
                )}
                {children && <span className="button__text">{children}</span>}
            </button>
        );
    }
    return (
        <a className={`button button_${className}`} href={href} target="_blank" rel="noopener noreferrer">
            <span>
                <img className="button__icon" src={imgSrc} alt="icon" />
            </span>
            {children && <span className="button__text">{children}</span>}
        </a>
    );
};

Button.defaultProps = {
    handleClick: () => {},
    isBehavedAsLink: false,
    children: '',
    imgSrc: '',
    href: '',
    type: 'submit',
    className: '',
};

Button.propTypes = {
    handleClick: PropTypes.func,
    isBehavedAsLink: PropTypes.bool,
    children: PropTypes.string,
    imgSrc: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;
