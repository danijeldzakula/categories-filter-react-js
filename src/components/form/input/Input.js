import React from 'react'
import { convertOfType } from '../../../helpers'

export function Input(props) {
  const { type, label, name, form, setForm, required, className } = props

  function onChange(event) {
    const { name, value } = event.target

    setForm((prevState) => {
      return { ...prevState, [name]: convertOfType(value) }
    })
  }

  function onClick(event) {
    const { name, checked } = event.target

    setForm((prevState) => {
      return { ...prevState, [name]: checked }
    })
  }

  if (!label) {
    return (
      <div className={`form-group ${className !== undefined ? className : ''}`}>
        <input
          type={type}
          name={name}
          required={required}
          value={form[name] || ''}
          onChange={onChange}
        />
        {required && <p style={{ color: 'red' }}>Error</p>}
      </div>
    )
  }

  if (type === 'checkbox') {
    return (
      <div className={`form-group ${className !== undefined ? className : ''}`}>
        <input
          id={name}
          type={type}
          name={name}
          required={required}
          checked={form[name] || false}
          onChange={onClick}
        />
        <label htmlFor={name}>{label}</label>
        {required && <p style={{ color: 'red' }}>Error</p>}
      </div>
    )
  }

  return (
    <div className={`form-group ${className !== undefined ? className : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        value={form[name] || ''}
        onChange={onChange}
      />
      {required && <p style={{ color: 'red' }}>Error</p>}
    </div>
  )
}
