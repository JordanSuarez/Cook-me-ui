import React from 'react'

import {classes as classesProps} from 'common/props'

function Home() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

Home.propTypes = {
  ...classesProps,
}

Home.defaultProps = {}

export default Home
