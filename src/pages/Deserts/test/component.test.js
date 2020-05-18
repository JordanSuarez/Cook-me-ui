import React from 'react'
import ReactDOM from 'react-dom'

import Deserts from '../component'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Deserts />, div)
  ReactDOM.unmountComponentAtNode(div)
})
