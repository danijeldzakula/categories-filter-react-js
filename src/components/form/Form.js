import React, { useEffect, useState, forwardRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from './input/Input'
import { checkFormFields, convertOfType } from '../../helpers'

const Form = forwardRef((props, ref) => {
  const { className, children, formInit, formRefetch, onSubmit, onDynamic } =
    props

  const [form, setForm] = useState([])

  const navigate = useNavigate()

  function sortByIndex(arr) {
    // Array.isArray(arr)
    // return arr
    return arr.sort((a, b) => a.index - b.index)
  }

  const inputs = sortByIndex(formInit)

  const getFormValues = useCallback(() => {
    let formKeyValue = []

    for (const input of inputs) {
      const isValidFields = checkFormFields(input)

      console.log(isValidFields)

      const key = input.name
      const value = input.value

      formKeyValue.push({ [key]: value })
    }

    const formObject = formKeyValue.reduce((obj, item) => {
      let keys = Object.keys(item)
      let values = Object.values(item)

      return Object.assign(obj, {
        [keys]: convertOfType(values),
      })
    }, {})

    return formObject
  }, [inputs])

  useEffect(() => {
    const formValues = getFormValues()
    setForm(formValues)
  }, [setForm, formRefetch, getFormValues])

  useEffect(() => {
    onDynamic(form)
  }, [form, onDynamic])

  console.log(window.location)

  function filterSearch() {}

  function removeSearch() {}

  return (
    <form
      ref={ref}
      onSubmit={(event) => onSubmit(event, form)}
      className={className}
    >
      {inputs &&
        inputs.length > 0 &&
        inputs.map((item, idx) => {
          return (
            <Input
              {...item}
              {...props}
              key={idx}
              form={form}
              setForm={setForm}
            />
          )
        })}

      <div className="form-button">{children}</div>

      <button onClick={() => filterSearch()}>Search</button>
    </form>
  )
})

export default Form
