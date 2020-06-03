import React from 'react'
import ReactDOM from 'react-dom'

import CreateForm from '../component'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<CreateForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})
