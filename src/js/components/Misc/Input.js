import React, { InputHTMLAttributes } from 'react';

const Input = ({
  label,
  name,
  className,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  error: string | undefined,
}) => {
  return (
    <div className={`input ${error ? 'error' : ''}`}>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>
      <input className={`input__input ${className}`} {...props} />
      {error && <p className='input__error'>{error}</p>}
    </div>
  );
};

export default Input;
