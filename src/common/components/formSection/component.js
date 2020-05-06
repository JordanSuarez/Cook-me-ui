// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function FormSection(callback) {
  const [values, setValues] = useState({login: '', password: ''})

  const handleData = (event) => {
    const {login, value} = event.target

    setValues({
      ...values,
      [login]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    callback()
  }

  return {
    handleData,
    handleSubmit,
    values,
  }
}

export default FormSection
