import {zipObject} from 'lodash'

const createReducer = (state, action, map) => (map[action.type] ? map[action.type](state, action) : state)

const createAction = (type, ...payloadKeys) => (...payloadValue) => ({type, payload: zipObject(payloadKeys, payloadValue)})

export {createReducer, createAction}
