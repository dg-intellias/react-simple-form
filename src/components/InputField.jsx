import React from 'react';

function InputField({ id, label, type, value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={error ? 'input-error' : ''}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value.trim())}
        placeholder={placeholder}
      />
      <p className='error-message'>{error}</p>
    </div>
  );
}

export default InputField;