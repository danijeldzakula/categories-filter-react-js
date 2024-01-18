import React, { Fragment, useState } from 'react'
import { display } from '../../helpers'

function InputAlert() {
  return <span>Alert</span>
}

function Label(props) {
  const { name, label, direction } = props

  return (
    <label htmlFor={name} style={{ display: display(direction) }}>
      <span>{label}</span>
      <span>:</span>
    </label>
  )
}

function Input(props) {
  const { name, type } = props

  return <input type={type} id={name} name={name} />
}

function InputField(props) {
  const { direction } = props

  switch (direction) {
    case 'top':
    case 'left':
      return (
        <Fragment>
          <Label {...props} />
          <Input {...props} />
        </Fragment>
      )
    case 'right':
    case 'bottom':
      return (
        <Fragment>
          <Input {...props} />
          <Label {...props} />
        </Fragment>
      )
    default:
      return (
        <Fragment>
          <Label {...props} />
          <Input {...props} />
        </Fragment>
      )
  }
}

export default function Filters() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  })

  function onChange(event) {
    console.log(event.target.value)
  }

  console.log(form)

  return (
    <form className="form form-filter">
      <div className="form-group">
        <InputField
          name="firstName"
          type="text"
          pattern=""
          required={true}
          value={form.firstName || ''}
          defaultValue=""
          label="First Name"
          form={form}
          setForm={setForm}
          onBlur={() => {}}
          onChange={() => onChange()}
          onClick={() => {}}
          onFocus={() => {}}
          onKeyDown={() => {}}
        />
      </div>
    </form>
  )
}
