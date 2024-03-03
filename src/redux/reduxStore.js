import {combineReducers, legacy_createStore} from 'redux'  // необходима разобраться с  legacy_createStore
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogReducer'

let reduser = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
})

 export let store =  legacy_createStore(reduser)
 
 window.store = store;

