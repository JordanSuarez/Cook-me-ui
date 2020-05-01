import React from 'react'
import ReactDOM from 'react-dom'

import Recipes from '../component'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Recipes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
