import { get, camelCase } from 'lodash'

import list from './list'

const stateSet = {list}

const globalSetting = 'redux'

/*
--------------------------------
usage: 
import mockState from 'mock-state'
---------------------------------

in function s: 
// use global setting
const state = mockState(state)

// to overwrite the actual state with a mockState
const state = mockState(state, 'list')
*/

export default (state, set = globalSetting) => get(stateSets, set, state)


