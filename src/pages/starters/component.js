import React, {useEffect} from 'react'

import {ALL} from '../../common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET} from '../../common/constants/methods'
import {getUrl} from '../../common/helpers/urlHandler'
import {RECIPES} from '../../common/constants/resources'

function Starters() {
  useEffect(() => {
    const url = getUrl(RECIPES, GET, ALL)

    callApi(url, GET)
      // eslint-disable-next-line no-empty-pattern
      .then(({}) => {})
      .catch(() => {})
  }, [])

  return <div>Starters List</div>
}

export default Starters
