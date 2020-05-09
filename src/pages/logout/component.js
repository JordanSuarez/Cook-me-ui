import {useEffect} from 'react'

import {useHistory} from 'react-router-dom'

import {getLoginRoute} from '../../common/routing/routesResolver'
import {logout} from 'common/helpers/authProvider'

function Logout() {
  const history = useHistory()

  useEffect(() => {
    logout()
    history.push(getLoginRoute())
    // eslint-disable-next-line
  }, [])

  return null
}

export default Logout
