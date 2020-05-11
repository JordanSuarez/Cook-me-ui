import React, {useEffect} from 'react'

import {any, arrayOf, func} from 'prop-types'

import List from '../../common/components/list'

function Starters({starters, fetchStarters}) {
  useEffect(() => {
    fetchStarters()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      Starters List
      <List items={starters} />
    </div>
  )
}

Starters.propTypes = {
  fetchStarters: func,
  starters: arrayOf(any),
}

Starters.defaultProps = {
  fetchStarters: Function.prototype,
  starters: [],
}

export default Starters
