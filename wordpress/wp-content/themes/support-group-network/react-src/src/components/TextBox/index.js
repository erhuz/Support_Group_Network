import React from 'react';
import PropTypes from 'prop-types';

const TextBox = props => {
  const {title, content, color, isWide, isLarge, link} = props

  const classes = `${color ? color : ''} ${isWide ? 'wide' : ''} ${isLarge ? 'large' : ''}`

  return (
    <div className={`textbox ${classes}`}>
      <h3 className="title"><span>{title}</span></h3>
      <p className="text">{content}</p>
      {link && <a className="link" href={link.url}>{link.text}</a>}
    </div>
  );
};

TextBox.propTypes = {
  
};

export default TextBox;