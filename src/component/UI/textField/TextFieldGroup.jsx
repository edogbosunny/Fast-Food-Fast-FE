/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  type,
  message,
  onChange,
  disabled,
  minLength,
  id,
}) => (
  <div className="txtwidth form-style-1">
    <input
      className="txtwidth form-style-1"
      type={type}
      id={id}
      className={classnames('form-control', { 'is-invalid': error })}
      name={name}
      message={message}
      minLength={minLength}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      value={value}
      required
    />
    {error && (<div className='invalid-feedback'>{error}</div>)}
    {message && <small className='form-text text-muted'>{message}</small>}
  </div>
);
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  minLength: PropTypes.string,
  type: PropTypes.string,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  id: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
