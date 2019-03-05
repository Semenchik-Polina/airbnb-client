import React from 'react';
import './button.scss';

const Button = (props) => {
  const {handleClick, isBehavedAsLink, text, imgSrc, href, style} = props;
  if (!isBehavedAsLink) {
    return (
      <button className={`button button-${style}`} onClick={handleClick}>
        {imgSrc ? (
          <span>
            <img className="button-icon" src={imgSrc} />
          </span>
        ) : null}
        {text ? <span className="button-text">{text}</span> : null}
      </button>
    );
  }
  return (
    <a className={`button button-${style}`} href={href} target="_blank">
      <span>
        <img className="button-icon" src={imgSrc} />
      </span>
      <span className="button-text">{text}</span>
    </a>
  );
};

export default Button;
