import React from 'react'
import ReactDOM from 'react-dom'

import Dish from '../component'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Dish />, div)
  ReactDOM.unmountComponentAtNode(div)
})
