import {ALL, ONE, TYPES} from 'common/constants/resources_type'
import {callApi} from 'common/helpers/repository'
import {GET, POST, PUT} from 'common/constants/methods'
import {getEndpoint} from 'common/helpers/urlHandler'
import {getFormattedFormValues} from './dataHandler'
import {INGREDIENTS, QUANTITY_TYPE, RECIPES} from 'common/constants/resources'
import {UPDATE} from 'common/constants/context'

const fetchEndpoints = [getEndpoint(INGREDIENTS, GET, ALL), getEndpoint(QUANTITY_TYPE, GET, ALL), getEndpoint(RECIPES, GET, TYPES)]

export const handleFetchRequest = async () => {
  // eslint-disable-next-line no-return-await
  return await Promise.all(fetchEndpoints.map((url) => callApi(url, GET)))
}

export const handleSubmitRequest = (context, id, values) => {
  const endpoint =
    context === UPDATE
      ? [getEndpoint(RECIPES, PUT, ONE, id), PUT, getFormattedFormValues(values)]
      : [getEndpoint(RECIPES, POST, ONE), POST, getFormattedFormValues(values)]

  return callApi(...endpoint)
}
