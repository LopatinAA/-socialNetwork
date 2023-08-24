import {combineReducers, legacy_createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,

})

export let store = legacy_createStore(reducers);
