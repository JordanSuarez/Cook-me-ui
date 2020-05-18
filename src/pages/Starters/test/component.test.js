import React from 'react'
import ReactDOM from 'react-dom'

import Starters from '../component'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Starters />, div)
  ReactDOM.unmountComponentAtNode(div)
})
