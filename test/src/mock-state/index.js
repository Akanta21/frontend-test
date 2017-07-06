import { get } from 'lodash'

import list from './list'
import subjects from './subjects'

const stateSet = {list, subjects}

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

export default (state, set = globalSetting) => get(stateSet, set, state)


