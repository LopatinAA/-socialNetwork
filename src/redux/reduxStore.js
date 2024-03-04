import {combineReducers, legacy_createStore} from 'redux'  // необходима разобраться с  legacy_createStore
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogReducer'
import { usersReducer } from './usersReduser'

let reduser = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer
})

 export let store =  legacy_createStore(reduser)
 
 window.store = store;

