import {any, arrayOf} from 'prop-types'
import React from 'react'

function List({items}) {
  return (
    <div>
      {items.map(({id, name, instruction}) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{instruction}</li>
        </ul>
      ))}
    </div>
  )
}

List.propTypes = {
  items: arrayOf(any),
}

List.defaultProps = {
  items: [],
}

export default List
