import {combineReducers, legacy_createStore} from 'redux'  // необходима разобраться с  legacy_createStore
// import { configureStore } from '@reduxjs/toolkit';
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogReducer'

let reduser = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
})

 export let store =  legacy_createStore(reduser)
 
 window.store = store;

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    }
)

// export const storeS = configureStore({reducer: rootReducer})

// export const storeS = configureStore({
//     reducer:rootReducer,
// })

// export let store = legacy_createStore(reducers);


// import {configureStore} from '@reduxjs/toolkit'
// const initialState = { value: 0 }

// const storer = configureStore({reducer: counterReducer})
// const addTodoAction = {
//   type: 'todos/todoAdded',
//   payload: 'Buy milk'
// }

// function counterReducer(state = initialState, action) {
//   // Check to see if the reducer cares about this action
//   if (action.type === 'counter/incremented') {
//     // If so, make a copy of `state`
//     return {
//       ...state,
//       // and update the copy with the new value
//       value: state.value + 1
//     }
//   }
//   // otherwise return the existing state unchanged
//   return state
// }

// console.log(storer.getState);