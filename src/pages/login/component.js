import React from 'react'
import TextField from '@material-ui/core/TextField'

function Login() {
  // TODO handle data when submit button

  return (
    <div>
      {/* TODO props : login(string) et children (node) */}
      {/*<FormSection title="Login">*/}
      <TextField required id="login" label="Login" variant="outlined" />
      <TextField required id="password" label="Password" type="password" variant="outlined" autoComplete="current-password" />
      {/* add submit button */}
      {/*</FormSection>*/}
    </div>
  )
}

Login.propTypes = {}

Login.defaultProps = {}

export default Login
