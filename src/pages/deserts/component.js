import React, {useEffect} from 'react'

import {any, arrayOf, func} from 'prop-types'

import List from '../../common/components/list'

function Deserts({deserts, fetchDeserts}) {
  useEffect(() => {
    fetchDeserts()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      Deserts List
      <List items={deserts} />
    </div>
  )
}

Deserts.propTypes = {
  deserts: arrayOf(any),
  fetchDeserts: func,
}

Deserts.defaultProps = {
  deserts: [],
  fetchDeserts: Function.prototype,
}

export default Deserts
