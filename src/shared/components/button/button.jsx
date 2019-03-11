import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
    const {
        handleClick, isBehavedAsLink, text, imgSrc, href, className,
    } = props;
    if (!isBehavedAsLink) {
        return (
            <button type="submit" className={`button button-${className}`} onClick={handleClick}>
                {imgSrc && (
                    <span>
                        <img className="button__icon" src={imgSrc} alt="icon" />
                    </span>
                )}
                {text && <span className="button__text">{text}</span>}
            </button>
        );
    }
    return (
        <a className={`button button-${className}`} href={href} target="_blank" rel="noopener noreferrer">
            <span>
                <img className="button__icon" src={imgSrc} alt="icon" />
            </span>
            <span className="button__text">{text}</span>
        </a>
    );
};

Button.defaultProps = {
    handleClick: () => {},
    isBehavedAsLink: false,
    text: '',
    imgSrc: '',
    href: '',
};

Button.propTypes = {
    handleClick: PropTypes.func,
    isBehavedAsLink: PropTypes.bool,
    text: PropTypes.string,
    imgSrc: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default Button;
