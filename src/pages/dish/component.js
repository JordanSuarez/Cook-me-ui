import React, {useEffect} from 'react'

import {any, arrayOf, func} from 'prop-types'

import List from '../../common/components/list'

function Dish({dish, fetchDish}) {
  useEffect(() => {
    fetchDish()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      Dish List
      <List items={dish} />
    </div>
  )
}

Dish.propTypes = {
  dish: arrayOf(any),
  fetchDish: func,
}

Dish.defaultProps = {
  dish: [],
  fetchDish: Function.prototype,
}

export default Dish
