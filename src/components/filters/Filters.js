import React, { useRef, useState } from 'react'
import Form from '../form/Form'

const formInit = [
  {
    index: 4,
    label: 'First Name',
    name: 'firstName',
    value: 'Danijel',
    type: 'text',
    required: true,
    placeholder: '',
    className: 'first_name',
  },
  {
    index: 3,
    label: 'Last Name',
    name: 'lastName',
    value: 'Dzakula',
    type: 'text',
    required: true,
    placeholder: '',
    className: 'last_name',
  },
  {
    index: 2,
    label: 'Email',
    name: 'email',
    value: 'danijel@gmail.com',
    type: 'email',
    required: true,
    placeholder: '',
    className: 'email',
  },
  {
    index: 1,
    label: 'Age',
    name: 'age',
    value: 31,
    type: 'number',
    required: true,
    placeholder: '',
    className: 'age',
  },
  {
    index: 0,
    label: 'Robot',
    name: 'robot',
    value: false,
    type: 'checkbox',
    required: false,
    placeholder: '',
    className: 'robot',
  },
]

export default function Filters() {
  const formRef = useRef(null)
  const [formRefetch, setFormRefetch] = useState(false)
  const [robot, setRobot] = useState(false)

  // Form dynamic value
  function onDynamic(data) {
    setRobot(data.robot || false)
  }

  // Form submit
  function onSubmit(event, form) {
    event.preventDefault()
    console.log(form)
  }

  // Form reset
  function onCancel() {
    setFormRefetch((prevState) => !prevState)
    formRef.current.reset()
  }

  // Form props
  const formProps = {
    ref: formRef,
    formInit: formInit,
    formExtend: robot,
    formRefetch: formRefetch,
    onDynamic: onDynamic,
    className: 'form',
  }

  return (
    <Form {...formProps} onSubmit={onSubmit}>
      <button type="button" onClick={() => onCancel()}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </Form>
  )
}
